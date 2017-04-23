import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComposeComponent } from './compose.component';
import { MessageComponent } from './message.component';
import { MessageListComponent } from './message-list.component';
import { MymessagesComponent } from './mymessages.component';
import { UIRouterModule } from '@uirouter/angular';
import { MYMESSAGES_STATES } from './mymessages.states';
import { FormsModule } from '@angular/forms';
import { MessagesDataService } from './messages-data.service';
import { FoldersDataService } from './folders-data.service';
import { FolderListComponent } from './folder-list.component';
import { MessageTableComponent } from './message-table.component';
import { SortMessagesComponent } from './sort-messages.component';
import { FormatMessagePipe } from './format-message.pipe';

@NgModule({
  imports: [
    UIRouterModule.forChild({ states: MYMESSAGES_STATES }),
    FormsModule,
    CommonModule
  ],
  declarations: [
    ComposeComponent,
    MessageComponent,
    MessageListComponent,
    MymessagesComponent,
    FolderListComponent,
    MessageTableComponent,
    SortMessagesComponent,
    FormatMessagePipe,
  ],
  providers: [
    MessagesDataService,
    FoldersDataService,
  ]
})
export class MymessagesModule { }
