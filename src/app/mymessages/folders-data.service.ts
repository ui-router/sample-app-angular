import { Injectable } from '@angular/core';
import { SessionStorage } from '../util/sessionStorage';
import { AppConfigService } from '../global/app-config.service';

export interface Folder {
  _id: string;
  columns: string[];
  actions: string[];
}

/** A fake REST client API for Folders resources */
@Injectable()
export class FoldersDataService extends SessionStorage<Folder> {
  constructor(appConfig: AppConfigService) {
    super('folders', 'assets/folders.json', appConfig);
  }
}
