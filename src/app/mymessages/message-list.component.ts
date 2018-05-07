import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from './interface';

/**
 * This component renders a list of messages using the `messageTable` component
 */
@Component({
  selector: 'app-message-list',
  template: `
    <div class="messages">
      <app-message-table [columns]="folder.columns" [messages]="messages$ | async"></app-message-table>
    </div>
`,
  styles: []
})
export class MessageListComponent {
  @Input() folder;
  @Input() messages$: Observable<Message[]>;

  constructor() { }
}
