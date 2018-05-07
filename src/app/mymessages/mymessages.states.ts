import { Ng2StateDeclaration } from '@uirouter/angular';
import { Transition } from '@uirouter/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfigService } from '../global/app-config.service';
import { ComposeComponent } from './compose.component';
import { FoldersDataService } from './folders-data.service';
import { Folder, Message } from './interface';
import { MessageListComponent } from './message-list.component';
import { MessageComponent } from './message.component';
import { MessagesDataService } from './messages-data.service';
import { MymessagesComponent } from './mymessages.component';

export function getFolders(foldersService: FoldersDataService) {
  return foldersService.all();
}

/**
 * The mymessages state. This is the main state for the mymessages submodule.
 *
 * This state shows the list of folders for the current user. It retrieves the folders from the
 * Folders service.  If a user navigates directly to this state, the state redirects to the 'mymessages.messagelist'.
 */
export const mymessagesState: Ng2StateDeclaration = {
  parent: 'app',
  name: 'mymessages',
  url: '/mymessages',
  component: MymessagesComponent,
  resolve: [
    // All the folders are fetched from the Folders service
    { token: 'folders', deps: [FoldersDataService], resolveFn: getFolders },
  ],
  // If mymessages state is directly activated, redirect the transition to the child state 'mymessages.messagelist'
  redirectTo: 'mymessages.messagelist',
  // Mark this state as requiring authentication.  See ../routerhooks/requiresAuth.js.
  data: { requiresAuth: true }
};


export function getFolder(foldersService: FoldersDataService, transition: Transition) {
  return foldersService.get(transition.params().folderId);
}

export function getMessages(messagesService: MessagesDataService, folder: Folder,
                            appConfig: AppConfigService): Promise<Observable<Message[]>> {
  const promise = messagesService.byFolder(folder);

  return promise.then(messages => appConfig.sort$.pipe(map(sortOrder =>
    MessagesDataService.sortedMessages(messages, sortOrder)
  )));
}

/**
 * This state shows the contents (a message list) of a single folder
 */
export const messageListState = {
  name: 'mymessages.messagelist',
  url: '/:folderId',
  // The folderId parameter is part of the URL.  This params block sets 'inbox' as the default value.
  // If no parameter value for folderId is provided on the transition, then it will be defaulted to 'inbox'
  params: { folderId: 'inbox' },
  views: {
    // This targets the "messagelist" named ui-view added to the DOM in the parent state 'mymessages'
    messagelist: {
      component: MessageListComponent,
    },
  },
  resolve: [
    // Fetch the current folder from the Folders service, using the folderId parameter
    { token: 'folder', deps: [FoldersDataService, Transition], resolveFn: getFolder },

    // The folder object (from the resolve above) is injected into this resolve
    // The list of message for the folder are fetched from the Messages service
    { token: 'messages$', deps: [MessagesDataService, 'folder', AppConfigService], resolveFn: getMessages },
  ],
};


export function getMessage(messagesService: MessagesDataService, transition: Transition) {
  return messagesService.get(transition.params().messageId);
}

export function getProximalMessage(messages$: Observable<Message[]>, message: Message) {
  return messages$.pipe(
    map((messages: Message[]) => {
      const curIdx = messages.indexOf(message);
      const nextIdx = curIdx === messages.length ? curIdx - 1 : curIdx + 1;
      return messages[nextIdx];
    })
  );
}

/**
 * This state shows the contents of a single message.
 * It also has UI to reply, forward, delete, or edit an existing draft.
 */
export const messageState: Ng2StateDeclaration = {
  name: 'mymessages.messagelist.message',
  url: '/:messageId',
  views: {
    // Relatively target the parent-state's parent-state's 'messagecontent' ui-view
    // This could also have been written using ui-view@state addressing: 'messagecontent@mymessages'
    // Or, this could also have been written using absolute ui-view addressing: '!$default.$default.messagecontent'
    '^.^.messagecontent': {
      component: MessageComponent,
    },
  },
  resolve: [
    // Fetch the message from the Messages service using the messageId parameter
    { token: 'message', deps: [MessagesDataService, Transition], resolveFn: getMessage },

    // Provide the component with the next closest message to activate if the current message is deleted
    { token: 'proximalMessage$', deps: ['messages$', 'message'], resolveFn: getProximalMessage }
  ],
};


/**
 * This state allows the user to compose a new message, edit a drafted message, send a message,
 * or save an unsent message as a draft.
 *
 * This state uses view-targeting to take over the ui-view that would normally be filled by the 'mymessages' state.
 */
export const composeState: Ng2StateDeclaration = {
  name: 'mymessages.compose',
  url: '/compose',
  views: {
    // Absolutely targets the $default (unnamed) ui-view, two nesting levels down with the composeComponent.
    '!$default.$default': { component: ComposeComponent }
  },
  // Declares that this state has a 'message' parameter, that defaults to an empty object.
  // Note the parameter does not appear in the URL.
  params: {
    message: {}
  },
};

export const MYMESSAGES_STATES = [
  mymessagesState,
  messageListState,
  messageState,
  composeState,
];
