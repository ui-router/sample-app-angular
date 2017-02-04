import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactDetailComponent } from './contact-detail.component';
import { ContactListComponent } from './contact-list.component';
import { ContactsComponent } from './contacts.component';
import { EditContactComponent } from './edit-contact.component';
import { CONTACTS_STATES } from './contacts.states';
import { UIRouterModule } from 'ui-router-ng2';
import { FormsModule } from '@angular/forms';
import { ContactsService } from './contacts.service';

@NgModule({
  imports: [
    UIRouterModule.forChild({ states: CONTACTS_STATES }),
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
    ContactsService
  ],
})
export class ContactsModule {
}
