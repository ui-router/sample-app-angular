import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface SortOrder {
  sortBy: string;
  order: number;
}

/**
 * This service stores and retrieves user preferences in session storage
 */
@Injectable()
export class AppConfigService {
  private _sort = '+date';
  sort$ = new BehaviorSubject<SortOrder>(this.parseSort(this.sort));

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

  toObject() {
    return {
      sort: this.sort,
      emailAddress: this.emailAddress,
      restDelay: this.restDelay,
    };
  }

  parseSort(sort: string): SortOrder {
    const defaultSort = '+date';
    const sortOrder = sort || defaultSort;
    const pattern = /^([+-])(.*)$/;
    const match = pattern.exec(sortOrder) || pattern.exec(defaultSort);
    const [__, order, sortBy] = match;

    return { sortBy, order: (order === '-' ? -1 : 1) };
  }

  load() {
    try {
      const data = JSON.parse(sessionStorage.getItem('appConfig'));
      return Object.assign(this, data);
    } catch (Error) { }

    return this;
  }

  save() {
    const string = JSON.stringify(this.toObject());
    sessionStorage.setItem('appConfig', string);
  }

}

