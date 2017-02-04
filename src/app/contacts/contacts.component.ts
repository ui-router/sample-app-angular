import { Component, Input } from '@angular/core';

/**
 * This component renders the contacts submodule.
 *
 * On the left is the list of contacts.
 * On the right is the ui-view viewport where contact details appear.
 */
@Component({
  selector: 'app-contacts',
  template: `
    <div class="my-contacts flex-h">
    
      <app-contact-list [contacts]="contacts" class="flex nogrow"></app-contact-list>
    
      <ui-view>
        <!-- This default content is displayed when the ui-view is not filled in by a child state -->
        <h4 style="margin: 1em 2em;">Select a contact</h4>
      </ui-view>
    </div>
`,
  styles: []
})
export class ContactsComponent {
  @Input() contacts;
  constructor() { }
}
