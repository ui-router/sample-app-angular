import { Injectable } from '@angular/core';
import { SessionStorage } from '../util/sessionStorage';
import { AppConfigService } from '../global/app-config.service';

/** A fake Contacts REST client API */
@Injectable()
export class ContactsService extends SessionStorage {
  constructor(appConfig: AppConfigService) {
    // http://beta.json-generator.com/api/json/get/V1g6UwwGx
    super('contacts', 'assets/contacts.json', appConfig);
  }
}
