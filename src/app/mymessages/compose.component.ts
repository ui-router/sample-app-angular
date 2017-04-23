import { Component, OnInit, OnDestroy } from '@angular/core';
import { Transition, StateService, equals, TransitionService } from '@uirouter/core';
import { DialogService } from '../global/dialog.service';
import { AppConfigService } from '../global/app-config.service';
import { MessagesDataService } from './messages-data.service';
import { copy } from '../util/util';

/**
 * This component composes a message
 *
 * The message might be new, a saved draft, or a reply/forward.
 * A Cancel button discards the new message and returns to the previous state.
 * A Save As Draft button saves the message to the "drafts" folder.
 * A Send button sends the message
 */
@Component({
  selector: 'app-compose',
  template: `
    <div class="compose">
      <div class="header">
        <div class="flex-h"> <label>Recipient</label> <input type="text" id="to" name="to" [(ngModel)]="message.to"> </div>
        <div class="flex-h"> <label>Subject</label> <input type="text" id="subject" name="subject" [(ngModel)]="message.subject"> </div>
      </div>
    
      <div class="body">
        <textarea name="body" id="body" [(ngModel)]="message.body" cols="30" rows="20"></textarea>
        
        <div class="buttons">
          <!-- Clicking this button brings the user back to the state they came from (previous state) -->
          <button class="btn btn-primary" (click)="gotoPreviousState()"><i class="fa fa-times-circle-o"></i><span>Cancel</span></button>
          <button class="btn btn-primary" (click)="save(message)"><i class="fa fa-save"></i><span>Save as Draft</span></button>
          <button class="btn btn-primary" (click)="send(message)"><i class="fa fa-paper-plane-o"></i><span>Send</span></button>
        </div>
      </div>
    </div>
`,
  styles: []
})
export class ComposeComponent implements OnInit {
  // data
  pristineMessage;
  message;
  canExit: boolean;

  constructor(public stateService: StateService,
              public transitionService: TransitionService,
              public DialogService: DialogService,
              public appConfig: AppConfigService,
              public messagesService: MessagesDataService,
              public transition: Transition,
  ) { }

  /**
   * Create our message's model using the current user's email address as 'message.from'
   * Then extend it with all the properties from (non-url) state parameter 'message'.
   * Keep two copies: the editable one and the original one.
   * These copies are used to check if the message is dirty.
   */
  ngOnInit() {
    const messageParam = this.transition.params().message;
    this.pristineMessage = Object.assign({from: this.appConfig.emailAddress}, messageParam);
    this.message = copy(this.pristineMessage);
  }

  /**
   * Checks if the edited copy and the pristine copy are identical when the state is changing.
   * If they are not identical, the allows the user to confirm navigating away without saving.
   */
  uiCanExit() {
    if (this.canExit || equals(this.pristineMessage, this.message)) {
      return true;
    }

    const message = 'You have not saved this message.';
    const question = 'Navigate away and lose changes?';
    return this.DialogService.confirm(message, question, 'Yes', 'No');
  }

  /**
   * Navigates back to the previous state.
   *
   * - Checks the $transition$ which activated this controller for a 'from state' that isn't the implicit root state.
   * - If there is no previous state (because the user deep-linked in, etc), then go to 'mymessages.messagelist'
   */
  gotoPreviousState() {
    const transition = this.transition;
    const hasPrevious = !!transition.from().name;
    const state = hasPrevious ? transition.from() : 'mymessages.messagelist';
    const params = hasPrevious ? transition.params('from') : {};
    this.stateService.go(state, params);
  };

  /** "Send" the message (save to the 'sent' folder), and then go to the previous state */
  send(message) {
    this.messagesService.save(Object.assign(message, {date: new Date(), read: true, folder: 'sent'}))
      .then(() => this.canExit = true)
      .then(() => this.gotoPreviousState());
  };

  /** Save the message to the 'drafts' folder, and then go to the previous state */
  save(message) {
    this.messagesService.save(Object.assign(message, {date: new Date(), read: true, folder: 'drafts'}))
      .then(() => this.canExit = true)
      .then(() => this.gotoPreviousState());
  }
}
