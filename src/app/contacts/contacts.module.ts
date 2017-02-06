import { NgModule, Injector, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactDetailComponent } from './contact-detail.component';
import { ContactListComponent } from './contact-list.component';
import { ContactsComponent } from './contacts.component';
import { EditContactComponent } from './edit-contact.component';
import { CONTACTS_STATES } from './contacts.states';
import { UIRouterModule } from 'ui-router-ng2';
import { FormsModule } from '@angular/forms';
import { ContactsDataService } from './contacts-data.service';
import { UIRouter } from 'ui-router-core';

export function configureRouter(router: UIRouter, injector: Injector) {
  const parentState = injector.get('PARENT_STATE');
  const moduleRoot = CONTACTS_STATES.find(state => state.name === 'contacts');
  moduleRoot.parent = parentState;
  CONTACTS_STATES.forEach(state => router.stateRegistry.register(state));
}

@NgModule({
  imports: [
    UIRouterModule.forChild({ states: [], config: configureRouter }),
    FormsModule,
    CommonModule
  ],
  declarations: [
    ContactComponent,
    ContactDetailComponent,
    ContactListComponent,
    ContactsComponent,
    EditContactComponent
  ],
  providers: [
    ContactsDataService,
    { provide: ANALYZE_FOR_ENTRY_COMPONENTS, multi: true, useValue: CONTACTS_STATES },
  ],
})
export class ContactsModule {
}
