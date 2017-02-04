import { Injectable } from '@angular/core';

/**
 * This service stores and retrieves user preferences in session storage
 */
@Injectable()
export class AppConfigService {
  sort = '+date';
  emailAddress: string = undefined;
  restDelay = 100;

  constructor() {
    this.load();
  }

  load() {
    try {
      return Object.assign(this, JSON.parse(sessionStorage.getItem('appConfig')));
    } catch (Error) { }

    return this;
  }

  save() {
    sessionStorage.setItem('appConfig', JSON.stringify(Object.assign({}, this)));
  }
}

