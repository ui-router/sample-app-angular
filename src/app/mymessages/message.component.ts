import { Component, OnInit, Input } from '@angular/core';
import { setProp } from '../util/util';
import { DialogService } from '../global/dialog.service';
import { MessagesDataService } from './messages-data.service';
import { StateService } from '@uirouter/core';
import { Subscription ,  Observable } from 'rxjs';
import { Folder, Message } from './interface';

/**
 * This component renders a single message
 *
 * Buttons perform actions related to the message.
 * Buttons are shown/hidden based on the folder's context.
 * For instance, a "draft" message can be edited, but can't be replied to.
 */
@Component({
  selector: 'app-message',
  template: `
    <div class="message">
    
      <div class="header">
        <div>
          <h4>{{message.subject}}</h4>
          <h5>{{message.from}} <i class="fa fa-long-arrow-right"></i> {{message.to}}</h5>
        </div>
    
        <div class="line2">
          <div>{{message.date | date: 'longDate'}} {{message.date | date: 'mediumTime'}}</div>
          <div>
            <button class="btn btn-primary" *ngIf="actions.edit" (click)="editDraft(message)">
              <i class="fa fa-pencil"></i> <span>Edit Draft</span>
            </button>
            
            <button class="btn btn-primary" *ngIf="actions.reply" (click)="reply(message)">
              <i class="fa fa-reply"></i> <span>Reply</span>
            </button>
            
            <button class="btn btn-primary" *ngIf="actions.forward" (click)="forward(message)">
              <i class="fa fa-forward" ></i> <span>Forward</span>
            </button>
            
            <button class="btn btn-primary" *ngIf="actions.delete" (click)="remove(message)">
              <i class="fa fa-close"></i> <span>Delete</span>
            </button>
          </div>
        </div>
      </div>
    
      <!-- Pass the raw (plain text) message body through the messageBody filter to format slightly nicer. -->
      <div class="body" [innerHTML]="message.body | formatMessage"></div>
    </div>
`,
  styles: []
})
export class MessageComponent implements OnInit {
  @Input() folder: Folder;
  @Input() message: Message;

  // What message should be activated if this message is deleted
  @Input() proximalMessage$: Observable<Message>;
  private proximalMessageSub: Subscription;
  proximalMessage: Message;

  // data
  actions;

  constructor(public stateService: StateService,
              public dialog: DialogService,
              public messagesService: MessagesDataService
  ) { }

  /**
   * When the user views a message, mark it as read and save (PUT) the resource.
   *
   * Apply the available actions for the message, depending on the folder the message belongs to.
   */
  ngOnInit() {
    this.message.read = true;
    this.messagesService.put(this.message);

    this.actions = this.folder.actions.reduce((obj, action) => setProp(obj, action, true), {});
    this.proximalMessageSub = this.proximalMessage$.subscribe(message => this.proximalMessage = message);
  }

  /**
   * Compose a new message as a reply to this one
   */
  reply(message) {
    const replyMsg = makeResponseMsg('Re: ', message);
    this.stateService.go('mymessages.compose', { message: replyMsg });
  };

  /**
   * Compose a new message as a forward of this one.
   */
  forward(message) {
    const fwdMsg = makeResponseMsg('Fwd: ', message);
    delete fwdMsg.to;
    this.stateService.go('mymessages.compose', { message: fwdMsg });
  };

  /**
   * Continue composing this (draft) message
   */
  editDraft(message) {
    this.stateService.go('mymessages.compose', { message: message });
  };

  /**
   * Delete this message.
   *
   * - confirm deletion
   * - delete the message
   * - determine which message should be active
   * - show that message
   */
  remove(message) {
    const nextMessageId = this.proximalMessage && this.proximalMessage._id;
    const nextState = nextMessageId ? 'mymessages.messagelist.message' : 'mymessages.messagelist';
    const params = { messageId: nextMessageId };

    this.dialog.confirm('Delete?', undefined)
      .then(() => this.messagesService.remove(message))
      .then(() => this.stateService.go(nextState, params, { reload: 'mymessages.messagelist' }));
  };
}



/** Helper function to prefix a message with "fwd: " or "re: " */
const prefixSubject = (prefix, message) => prefix + message.subject;
/** Helper function which quotes an email message */
const quoteMessage = (message) => `



---------------------------------------
Original message:
From: ${message.from}
Date: ${message.date}
Subject: ${message.subject}

${message.body}`;

/** Helper function to make a response message object */
function makeResponseMsg(subjectPrefix, origMsg) {
  return {
    from: origMsg.to,
    to: origMsg.from,
    subject: prefixSubject(subjectPrefix, origMsg),
    body: quoteMessage(origMsg)
  };
}

