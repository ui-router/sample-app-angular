import { Component, Input } from '@angular/core';

/**
 * The main mymessages component.
 *
 * Renders a list of folders, and has two viewports:
 * - messageList: filled with the list of messages for a folder
 * - messagecontent: filled with the contents of a single message.
 */
@Component({
  selector: 'app-mymessages',
  template: `
    <div class="my-messages">
    
      <!-- Show message folders -->
      <app-folder-list [folders]="folders"></app-folder-list>
    
      <!-- A named view for the list of messages in this folder.  This will be  filled in by the 'mymessages.messagelist' child state -->
      <ui-view name="messagelist" class="messagelist"></ui-view>
    
    </div>
    
    <!-- A named ui-view for a message's contents.  The 'mymessages.messagelist.message' grandchild state plugs into this ui-view -->
    <ui-view name="messagecontent"></ui-view>
`,
  styles: []
})
export class MymessagesComponent {
  @Input() folders: any[];

  constructor() { }
}
