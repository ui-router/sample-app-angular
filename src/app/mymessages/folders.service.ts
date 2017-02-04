import { Injectable } from '@angular/core';
import { SessionStorage } from '../util/sessionStorage';
import { AppConfigService } from '../global/app-config.service';

/** A fake REST client API for Folders resources */
@Injectable()
export class FoldersService extends SessionStorage {
  constructor(appConfig: AppConfigService) {
    super('folders', 'assets/folders.json', appConfig);
  }
}
