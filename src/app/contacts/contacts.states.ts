import {Ng2StateDeclaration} from '@uirouter/angular';

import {ContactComponent} from './contact.component';
import {ContactsComponent} from './contacts.component';
import {EditContactComponent} from './edit-contact.component';
import { ContactsDataService } from './contacts-data.service';
import { Transition } from '@uirouter/core';


export function getAllContacts(contactSvc) {
  return contactSvc.all();
}

/**
 * This state displays the contact list.
 * It also provides a nested ui-view (viewport) for child states to fill in.
 *
 * The contacts are fetched using a resolve.
 */
export const contactsState: Ng2StateDeclaration = {
  parent: 'app', // declares that 'contacts' is a child of 'app'
  name: 'contacts',
  url: '/contacts',
  component: ContactsComponent,
  resolve: [
    // Resolve all the contacts.  The resolved contacts are injected into the controller.
    { token: 'contacts', deps: [ContactsDataService], resolveFn: getAllContacts },
  ],
  data: { requiresAuth: true },
};


export function getOneContact (contactSvc, $transition$) {
  return contactSvc.get($transition$.params().contactId);
}

/**
 * This state displays a single contact.
 * The contact to display is fetched using a resolve, based on the `contactId` parameter.
 */
export const viewContactState: Ng2StateDeclaration = {
  name: 'contacts.contact',
  url: '/:contactId',
  component: ContactComponent,
  resolve: [
    // Resolve the contact, based on the contactId parameter value.
    // The resolved contact is provided to the contactComponent's contact binding
    { token: 'contact', deps: [ContactsDataService, Transition], resolveFn: getOneContact },
  ],
};


/**
 * This state allows a user to edit a contact
 *
 * The contact data to edit is injected from the parent state's resolve.
 *
 * This state uses view targeting to replace the parent ui-view (which would normally be filled
 * by 'contacts.contact') with the edit contact template/controller
 */
export const editContactState: Ng2StateDeclaration = {
  name: 'contacts.contact.edit',
  url: '/edit',
  views: {
    // Relatively target the grand-parent-state's $default (unnamed) ui-view
    // This could also have been written using ui-view@state addressing: $default@contacts
    // Or, this could also have been written using absolute ui-view addressing: !$default.$default.$default
    '^.^.$default': {
      component: EditContactComponent,
      bindings: { pristineContact: 'contact' },
    }
  },
};


export function getBlankContact() {
  return { name: {}, address: {} };
}

/**
 * This state allows a user to create a new contact
 *
 * The contact data to edit is injected into the component from the parent state's resolve.
 */
export const newContactState: Ng2StateDeclaration = {
  name: 'contacts.new',
  url: '/new',
  component: EditContactComponent,
  resolve: [
    { token: 'pristineContact', deps: [], resolveFn: getBlankContact }
  ],
};

export const CONTACTS_STATES = [
  contactsState,
  viewContactState,
  editContactState,
  newContactState,
];
