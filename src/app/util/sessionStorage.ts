import { pushToArr, guid, wait } from './util';
import { AppConfigService } from '../global/app-config.service';

/**
 * This class simulates a RESTful resource, but the API calls fetch data from
 * Session Storage instead of an HTTP call.
 *
 * Once configured, it loads the initial (pristine) data from the URL provided (using HTTP).
 * It exposes GET/PUT/POST/DELETE-like API that operates on the data.  All the data is also
 * stored in Session Storage.  If any data is modified in memory, session storage is updated.
 * If the browser is refreshed, the SessionStorage object will try to fetch the existing data from
 * the session, before falling back to re-fetching the initial data using HTTP.
 *
 * For an example, please see dataSources.js
 */
export class SessionStorage<T> {
  // data
  _data: Promise<T[]>;
  _idProp: string;
  _eqFn: (a: T, b: T) => boolean;

  /**
   * Creates a new SessionStorage object
   *
   * @param sessionStorageKey The session storage key. The data will be stored in browser's session storage under this key.
   * @param sourceUrl The url that contains the initial data.
   * @param appConfig Pass in the AppConfig object
   */
  constructor(public sessionStorageKey, sourceUrl, public appConfig: AppConfigService) {
    let data;
    const fromSession = sessionStorage.getItem(sessionStorageKey);
    // A promise for *all* of the data.
    this._data = undefined;

    // For each data object, the _idProp defines which property has that object's unique identifier
    this._idProp = '_id';

    // A basic triple-equals equality checker for two values
    this._eqFn = (l, r) => l[this._idProp] === r[this._idProp];

    if (fromSession) {
      try {
        // Try to parse the existing data from the Session Storage API
        data = JSON.parse(fromSession);
      } catch (e) {
        console.log('Unable to parse session messages, retrieving intial data.');
      }
    }

    // Create a promise for the data; Either the existing data from session storage, or the initial data via $http request
    this._data = (data ? Promise.resolve(data) : fetch(sourceUrl)
        .then(resp => resp.json()))
        .then(this._commit.bind(this))
        .then(() => JSON.parse(sessionStorage.getItem(sessionStorageKey)));
  }

  /** Saves all the data back to the session storage */
  _commit(data: T[]): Promise<T[]> {
    sessionStorage.setItem(this.sessionStorageKey, JSON.stringify(data));
    return Promise.resolve(data);
  }

  /** Helper which simulates a delay, then provides the `thenFn` with the data */
  all(): Promise<T[]> {
    const delay = this.appConfig.restDelay;
    return wait(delay).then(() => this._data);
  }

  /** Given a sample item, returns a promise for all the data for items which have the same properties as the sample */
  search(exampleItem): Promise<T[]> {
    const contains = (search, inString) =>
        ('' + inString).indexOf('' + search) !== -1;
    const matchesExample = (example, item) =>
        Object.keys(example).reduce((memo, key) => memo && contains(example[key], item[key]), true);
    return this.all().then(items =>
        items.filter(matchesExample.bind(null, exampleItem)));
  }

  /** Returns a promise for the item with the given identifier */
  get(id): Promise<T> {
    return this.all().then(items =>
        items.find(item => item[this._idProp] === id));
  }

  /** Returns a promise to save the item.  It delegates to put() or post() if the object has or does not have an identifier set */
  save(item: T): Promise<T>  {
    return item[this._idProp] ? this.put(item) : this.post(item);
  }

  /** Returns a promise to save (POST) a new item.   The item's identifier is auto-assigned. */
  post(item: T): Promise<T> {
    item[this._idProp] = guid();
    return this.all()
      .then(items => pushToArr(items, item))
      .then(this._commit.bind(this))
      .then(() => item);
  }

  /** Returns a promise to save (PUT) an existing item. */
  put(item: T, eqFn = this._eqFn): Promise<T> {
    return this.all().then(items => {
      const idx = items.findIndex(eqFn.bind(null, item));
      if (idx === -1) {
        throw Error(`${item} not found in ${this}`);
      }
      items[idx] = item;
      return this._commit(items).then(() => item);
    });
  }

  /** Returns a promise to remove (DELETE) an item. */
  remove(item: T, eqFn = this._eqFn): Promise<T> {
    return this.all().then(items => {
      const idx = items.findIndex(eqFn.bind(null, item));
      if (idx === -1) {
        throw Error(`${item} not found in ${this}`);
      }
      items.splice(idx, 1);
      return this._commit(items).then(() => item);
    });
  }
}
