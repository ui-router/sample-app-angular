import { AppConfigService } from '../global/app-config.service';
import { Injectable } from '@angular/core';
import { SessionStorage } from '../util/sessionStorage';

export interface Contact {
  tags: any[];
  address: {
    zip: number;
    state: string;
    city: string;
    street: string;
  };
  phone: string;
  email: string;
  company: string;
  age: number;
  picture: string;
  _id: string;
  name: {
    last: string;
    first: string
  };
}

/** A fake Contacts REST client API */
@Injectable()
export class ContactsDataService extends SessionStorage<Contact> {
  constructor(appConfig: AppConfigService) {
    // http://beta.json-generator.com/api/json/get/V1g6UwwGx
    super('contacts', 'assets/contacts.json', appConfig);
  }
}
