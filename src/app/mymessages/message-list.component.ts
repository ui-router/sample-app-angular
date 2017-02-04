import { Component, Input } from '@angular/core';

/**
 * This component renders a list of messages using the `messageTable` component
 */
@Component({
  selector: 'app-message-list',
  template: `
    <div class="messages">
      <app-message-table [columns]="folder.columns" [messages]="messages"></app-message-table>
    </div>
`,
  styles: []
})
export class MessageListComponent {
  @Input() folder;
  @Input() messages: any[];

  constructor() { }
}
