import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

/**
 * This service stores and retrieves user preferences in session storage
 */
@Injectable()
export class AppConfigService {
  private _sort = '+date';
  sort$ = new BehaviorSubject(this.parseSort(this.sort));
  get sort() { return this._sort; }
  set sort(val: string) {
    this._sort = val;
    this.sort$.next(this.parseSort(val));
  }

  emailAddress: string = undefined;
  restDelay = 100;

  constructor() {
    this.load();
  }

  parseSort(sort: string) {
    const defaultSort = '+date';
    const sortOrder = sort || defaultSort;
    const pattern = /^([+-])(.*)$/;
    const match = pattern.exec(sortOrder) || pattern.exec(defaultSort);
    const [__, order, sortBy] = match;

    return { sortBy, order: (order === '-' ? -1 : 1) };
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

