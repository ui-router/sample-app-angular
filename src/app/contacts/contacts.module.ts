import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactDetailComponent } from './contact-detail.component';
import { ContactListComponent } from './contact-list.component';
import { ContactsComponent } from './contacts.component';
import { EditContactComponent } from './edit-contact.component';
import { CONTACTS_STATES } from './contacts.states';
import { UIRouterModule } from '@uirouter/angular';
import { FormsModule } from '@angular/forms';
import { ContactsDataService } from './contacts-data.service';

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
    ContactsDataService
  ],
})
export class ContactsModule {
}
