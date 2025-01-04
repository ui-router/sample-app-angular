import { Component, OnInit, Input, Inject, OnDestroy } from '@angular/core';
import { StateService, TransitionService, equals, StateDeclaration } from '@uirouter/core';
import { DialogService } from '../global/dialog.service';
import { ContactsDataService } from './contacts-data.service';
import { copy } from '../util/util';

/**
 * The EditContact component
 *
 * This component is used by both `contacts.contact.edit` and `contacts.new` states.
 *
 * The component makes a copy of the contqct data for editing.
 * The new copy and original (pristine) copy are used to determine if the contact is "dirty" or not.
 * If the user navigates to some other state while the contact is "dirty", the `uiCanExit` component
 * hook asks the user to confirm navigation away, losing any edits.
 *
 * The Delete Contact button is wired to the `remove` method, which:
 * - asks for confirmation from the user
 * - deletes the resource from REST API
 * - navigates back to the contacts grandparent state using relative addressing `^.^`
 *   the `reload: true` option re-fetches the contacts list from the server
 *
 * The Save Contact button is wired to the `save` method which:
 * - saves the REST resource (PUT or POST, depending)
 * - navigates back to the parent state using relative addressing `^`.
 *   when editing an existing contact, this returns to the `contacts.contact` "view contact" state
 *   when creating a new contact, this returns to the `contacts` list.
 *   the `reload: true` option re-fetches the contacts resolve data from the server
 */
@Component({
    selector: 'app-edit-contact',
    template: `
    <div class="contact">
      <div class="details">
        <div><label>First</label><input type="text" [(ngModel)]="contact.name.first"></div>
        <div><label>Last</label><input type="text" [(ngModel)]="contact.name.last"></div>
        <div><label>Company</label><input type="text" [(ngModel)]="contact.company"></div>
        <div><label>Age</label><input type="text" [(ngModel)]="contact.age"></div>
        <div><label>Phone</label><input type="text" [(ngModel)]="contact.phone"></div>
        <div><label>Email</label><input type="text" [(ngModel)]="contact.email"></div>
        <div><label>Street</label><input type="text" [(ngModel)]="contact.address.street"></div>
        <div><label>City</label><input type="text" [(ngModel)]="contact.address.city"> </div>
        <div><label>State</label><input type="text" [(ngModel)]="contact.address.state"></div>
        <div><label>Zip</label><input type="text" [(ngModel)]="contact.address.zip"></div>
        <div><label>Image</label><input type="text" [(ngModel)]="contact.picture"></div>
      </div>
    
      <hr>
    
      <div>
        <!-- This button's ui-sref relatively targets the parent state, i.e., contacts.contact -->
        <button class="btn btn-primary" uiSref="^"><i class="fa fa-close"></i><span>Cancel</span></button>
        <button class="btn btn-primary" (click)="save(contact)"><i class="fa fa-save"></i><span>Save</span></button>
        <button class="btn btn-primary" (click)="remove(contact)"><i class="fa fa-close"></i><span>Delete</span></button>
      </div>
    </div>
`,
    styles: [],
    standalone: false
})
export class EditContactComponent implements OnInit {
  @Input() pristineContact;
  contact;
  canExit: boolean;

  constructor(public $state: StateService,
              public dialogService: DialogService,
              public contactsService: ContactsDataService,
              // The state that is routing to the component, which could
              // be either contacts.new or contacts.contact.edit
              @Inject('$state$') public $state$: StateDeclaration,
              public transitionService: TransitionService) {
  }

  ngOnInit() {
    // Make an editable copy of the pristineContact
    this.contact = copy(this.pristineContact);
  }

  uiCanExit() {
    if (this.canExit || equals(this.contact, this.pristineContact)) {
      return true;
    }

    const message = 'You have unsaved changes to this contact.';
    const question = 'Navigate away and lose changes?';
    return this.dialogService.confirm(message, question);
  }

  /** Ask for confirmation, then delete the contact, then go to the grandparent state ('contacts') */
  remove(contact) {
    this.dialogService.confirm(`Delete contact: ${contact.name.first} ${contact.name.last}`)
      .then(() => this.contactsService.remove(contact))
      .then(() => this.canExit = true)
      .then(() => this.$state.go('^.^', null, { reload: true }));
  }

  /** Save the contact, then go to the parent state (either 'contacts' or 'contacts.contact') */
  save(contact) {
    this.contactsService.save(contact)
      .then(() => this.canExit = true)
      .then(() => this.$state.go('^', null, { reload: true }));
  }
}
