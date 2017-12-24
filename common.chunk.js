webpackJsonp(["common"],{

/***/ "../../../../../src/app/util/sessionStorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__("../../../../../src/app/util/util.ts");

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
var SessionStorage = /** @class */ (function () {
    /**
     * Creates a new SessionStorage object
     *
     * @param sessionStorageKey The session storage key. The data will be stored in browser's session storage under this key.
     * @param sourceUrl The url that contains the initial data.
     * @param appConfig Pass in the AppConfig object
     */
    function SessionStorage(sessionStorageKey, sourceUrl, appConfig) {
        var _this = this;
        this.sessionStorageKey = sessionStorageKey;
        this.appConfig = appConfig;
        var data;
        var fromSession = sessionStorage.getItem(sessionStorageKey);
        // A promise for *all* of the data.
        this._data = undefined;
        // For each data object, the _idProp defines which property has that object's unique identifier
        this._idProp = '_id';
        // A basic triple-equals equality checker for two values
        this._eqFn = function (l, r) { return l[_this._idProp] === r[_this._idProp]; };
        if (fromSession) {
            try {
                // Try to parse the existing data from the Session Storage API
                data = JSON.parse(fromSession);
            }
            catch (e) {
                console.log('Unable to parse session messages, retrieving intial data.');
            }
        }
        // Create a promise for the data; Either the existing data from session storage, or the initial data via $http request
        this._data = (data ? Promise.resolve(data) : fetch(sourceUrl)
            .then(function (resp) { return resp.json(); }))
            .then(this._commit.bind(this))
            .then(function () { return JSON.parse(sessionStorage.getItem(sessionStorageKey)); });
    }
    /** Saves all the data back to the session storage */
    SessionStorage.prototype._commit = function (data) {
        sessionStorage.setItem(this.sessionStorageKey, JSON.stringify(data));
        return Promise.resolve(data);
    };
    /** Helper which simulates a delay, then provides the `thenFn` with the data */
    SessionStorage.prototype.all = function () {
        var _this = this;
        var delay = this.appConfig.restDelay;
        return Object(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* wait */])(delay).then(function () { return _this._data; });
    };
    /** Given a sample item, returns a promise for all the data for items which have the same properties as the sample */
    SessionStorage.prototype.search = function (exampleItem) {
        var contains = function (search, inString) {
            return ('' + inString).indexOf('' + search) !== -1;
        };
        var matchesExample = function (example, item) {
            return Object.keys(example).reduce(function (memo, key) { return memo && contains(example[key], item[key]); }, true);
        };
        return this.all().then(function (items) {
            return items.filter(matchesExample.bind(null, exampleItem));
        });
    };
    /** Returns a promise for the item with the given identifier */
    SessionStorage.prototype.get = function (id) {
        var _this = this;
        return this.all().then(function (items) {
            return items.find(function (item) { return item[_this._idProp] === id; });
        });
    };
    /** Returns a promise to save the item.  It delegates to put() or post() if the object has or does not have an identifier set */
    SessionStorage.prototype.save = function (item) {
        return item[this._idProp] ? this.put(item) : this.post(item);
    };
    /** Returns a promise to save (POST) a new item.   The item's identifier is auto-assigned. */
    SessionStorage.prototype.post = function (item) {
        item[this._idProp] = Object(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* guid */])();
        return this.all()
            .then(function (items) { return Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* pushToArr */])(items, item); })
            .then(this._commit.bind(this))
            .then(function () { return item; });
    };
    /** Returns a promise to save (PUT) an existing item. */
    SessionStorage.prototype.put = function (item, eqFn) {
        var _this = this;
        if (eqFn === void 0) { eqFn = this._eqFn; }
        return this.all().then(function (items) {
            var idx = items.findIndex(eqFn.bind(null, item));
            if (idx === -1) {
                throw Error(item + " not found in " + _this);
            }
            items[idx] = item;
            return _this._commit(items).then(function () { return item; });
        });
    };
    /** Returns a promise to remove (DELETE) an item. */
    SessionStorage.prototype.remove = function (item, eqFn) {
        var _this = this;
        if (eqFn === void 0) { eqFn = this._eqFn; }
        return this.all().then(function (items) {
            var idx = items.findIndex(eqFn.bind(null, item));
            if (idx === -1) {
                throw Error(item + " not found in " + _this);
            }
            items.splice(idx, 1);
            return _this._commit(items).then(function () { return item; });
        });
    };
    return SessionStorage;
}());



/***/ })

});
//# sourceMappingURL=common.chunk.js.map