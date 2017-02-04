import { Injectable } from '@angular/core';
import { SessionStorage } from '../util/sessionStorage';
import { AppConfigService } from '../global/app-config.service';

/** A fake REST client API for Messages resources */
@Injectable()
export class MessagesService extends SessionStorage {
  constructor(appConfig: AppConfigService) {
    // http://beta.json-generator.com/api/json/get/VJl5GbIze
    super('messages', 'assets/messages.json', appConfig);
  }

  byFolder(folder) {
    const searchObject = { folder: folder._id };
    const toFromAttr = ['drafts', 'sent'].indexOf(folder._id) !== -1 ? 'from' : 'to';
    searchObject[toFromAttr] = this.appConfig.emailAddress;
    return this.search(searchObject);
  }
}
