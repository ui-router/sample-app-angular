webpackJsonp([1,7],{

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_component__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_detail_component__ = __webpack_require__(798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_list_component__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contacts_component__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_contact_component__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contacts_states__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ui_router_ng2__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contacts_data_service__ = __webpack_require__(788);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsModule", function() { return ContactsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ContactsModule = (function () {
    function ContactsModule() {
    }
    ContactsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_8_ui_router_ng2__["UIRouterModule"].forChild({ states: __WEBPACK_IMPORTED_MODULE_7__contacts_states__["a" /* CONTACTS_STATES */] }),
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_3__contact_detail_component__["a" /* ContactDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_4__contact_list_component__["a" /* ContactListComponent */],
                __WEBPACK_IMPORTED_MODULE_5__contacts_component__["a" /* ContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__edit_contact_component__["a" /* EditContactComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__contacts_data_service__["a" /* ContactsDataService */]
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], ContactsModule);
    return ContactsModule;
}());
//# sourceMappingURL=/Users/christhielen/projects/sample-app-ng2/src/contacts.module.js.map

/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(271);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionStorage; });

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
var SessionStorage = (function () {
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
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* wait */])(delay).then(function () { return _this._data; });
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
        item[this._idProp] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* guid */])();
        return this.all()
            .then(function (items) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* pushToArr */])(items, item); })
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
//# sourceMappingURL=/Users/christhielen/projects/sample-app-ng2/src/sessionStorage.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_app_config_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_sessionStorage__ = __webpack_require__(787);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsDataService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/** A fake Contacts REST client API */
var ContactsDataService = (function (_super) {
    __extends(ContactsDataService, _super);
    function ContactsDataService(appConfig) {
        // http://beta.json-generator.com/api/json/get/V1g6UwwGx
        _super.call(this, 'contacts', 'assets/contacts.json', appConfig);
    }
    ContactsDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__global_app_config_service__["a" /* AppConfigService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__global_app_config_service__["a" /* AppConfigService */]) === 'function' && _a) || Object])
    ], ContactsDataService);
    return ContactsDataService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__util_sessionStorage__["a" /* SessionStorage */]));
//# sourceMappingURL=/Users/christhielen/projects/sample-app-ng2/src/contacts-data.service.js.map

/***/ }),

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * This component renders details for a single contact
 *
 * A button messages the contact by linking to `mymessages.compose` state passing the email as a state parameter.
 * Another button edits the contact by linking to `contacts.contact.edit` state.
 */
var ContactComponent = (function () {
    function ContactComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(), 
        __metadata('design:type', Object)
    ], ContactComponent.prototype, "contact", void 0);
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
            selector: 'app-contact',
            template: "\n    <div class=\"contact\">\n      <app-contact-detail [contact]=\"contact\"></app-contact-detail>\n    \n      <!-- This button has an ui-sref to the mymessages.compose state. The ui-sref provides the mymessages.compose\n           state with an non-url parameter, which is used as the initial message model -->\n      <button class=\"btn btn-primary\" uiSref=\"mymessages.compose\" [uiParams]=\"{ message: { to: contact.email } }\">\n        <i class=\"fa fa-envelope\"></i><span>Message</span>\n      </button>\n    \n      <!-- This button has a relative ui-sref to the contacts.contact.edit state. -->\n      <button class=\"btn btn-primary\" uiSref=\".edit\">\n        <i class=\"fa fa-pencil\"></i><span>Edit Contact</span>\n      </button>\n      <ui-view></ui-view>\n    </div>\n",
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
//# sourceMappingURL=/Users/christhielen/projects/sample-app-ng2/src/contact.component.js.map

/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * This component renders the contacts submodule.
 *
 * On the left is the list of contacts.
 * On the right is the ui-view viewport where contact details appear.
 */
var ContactsComponent = (function () {
    function ContactsComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(), 
        __metadata('design:type', Object)
    ], ContactsComponent.prototype, "contacts", void 0);
    ContactsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
            selector: 'app-contacts',
            template: "\n    <div class=\"my-contacts flex-h\">\n    \n      <app-contact-list [contacts]=\"contacts\" class=\"flex nogrow\"></app-contact-list>\n    \n      <ui-view>\n        <!-- This default content is displayed when the ui-view is not filled in by a child state -->\n        <h4 style=\"margin: 1em 2em;\">Select a contact</h4>\n      </ui-view>\n    </div>\n",
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], ContactsComponent);
    return ContactsComponent;
}());
//# sourceMappingURL=/Users/christhielen/projects/sample-app-ng2/src/contacts.component.js.map

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ui_router_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ui_router_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ui_router_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_dialog_service__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contacts_data_service__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_util__ = __webpack_require__(271);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





/**
 * The EditContact component
 *
 * This component is used by both `contacts.contact.edit` and `contacts.new` states.
 *
 * The component makes a copy of the contqct data for editing.
 * The new copy and original (pristine) copy are used to determine if the contact is "dirty" or not.
 * If the user navigates to some other state while the contact is "dirty", the `uiCanExit` component
 * hook asks the user to confirm navigation away, losing any edits.
 *
 * The Delete Contact button is wired to the `remove` method, which:
 * - asks for confirmation from the user
 * - deletes the resource from REST API
 * - navigates back to the contacts grandparent state using relative addressing `^.^`
 *   the `reload: true` option re-fetches the contacts list from the server
 *
 * The Save Contact button is wired to the `save` method which:
 * - saves the REST resource (PUT or POST, depending)
 * - navigates back to the parent state using relative addressing `^`.
 *   when editing an existing contact, this returns to the `contacts.contact` "view contact" state
 *   when creating a new contact, this returns to the `contacts` list.
 *   the `reload: true` option re-fetches the contacts resolve data from the server
 */
var EditContactComponent = (function () {
    function EditContactComponent($state, dialogService, contactsService, 
        // The state that is routing to the component, which could
        // be either contacts.new or contacts.contact.edit
        $state$, transitionService) {
        this.$state = $state;
        this.dialogService = dialogService;
        this.contactsService = contactsService;
        this.$state$ = $state$;
        this.transitionService = transitionService;
    }
    EditContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Make an editable copy of the pristineContact
        this.contact = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_util__["e" /* copy */])(this.pristineContact);
        // Hack until official support for uiCanExit lands in ui-router-ng2 1.0.0-beta.5
        this.deregister = this.transitionService.onStart({ exiting: this.$state$.name }, function () { return _this.uiCanExit(); });
    };
    EditContactComponent.prototype.ngOnDestroy = function () {
        if (this.deregister) {
            this.deregister();
        }
    };
    EditContactComponent.prototype.uiCanExit = function () {
        if (this.canExit || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ui_router_core__["equals"])(this.contact, this.pristineContact)) {
            return Promise.resolve(true);
        }
        var message = 'You have unsaved changes to this contact.';
        var question = 'Navigate away and lose changes?';
        return this.dialogService.confirm(message, question);
    };
    /** Ask for confirmation, then delete the contact, then go to the grandparent state ('contacts') */
    EditContactComponent.prototype.remove = function (contact) {
        var _this = this;
        this.dialogService.confirm("Delete contact: " + contact.name.first + " " + contact.name.last)
            .then(function () { return _this.contactsService.remove(contact); })
            .then(function () { return _this.canExit = true; })
            .then(function () { return _this.$state.go('^.^', null, { reload: true }); });
    };
    /** Save the contact, then go to the parent state (either 'contacts' or 'contacts.contact') */
    EditContactComponent.prototype.save = function (contact) {
        var _this = this;
        this.contactsService.save(contact)
            .then(function () { return _this.canExit = true; })
            .then(function () { return _this.$state.go('^', null, { reload: true }); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(), 
        __metadata('design:type', Object)
    ], EditContactComponent.prototype, "pristineContact", void 0);
    EditContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
            selector: 'app-edit-contact',
            template: "\n    <div class=\"contact\">\n      <div class=\"details\">\n        <div><label>First</label><input type=\"text\" [(ngModel)]=\"contact.name.first\"></div>\n        <div><label>Last</label><input type=\"text\" [(ngModel)]=\"contact.name.last\"></div>\n        <div><label>Company</label><input type=\"text\" [(ngModel)]=\"contact.company\"></div>\n        <div><label>Age</label><input type=\"text\" [(ngModel)]=\"contact.age\"></div>\n        <div><label>Phone</label><input type=\"text\" [(ngModel)]=\"contact.phone\"></div>\n        <div><label>Email</label><input type=\"text\" [(ngModel)]=\"contact.email\"></div>\n        <div><label>Street</label><input type=\"text\" [(ngModel)]=\"contact.address.street\"></div>\n        <div><label>City</label><input type=\"text\" [(ngModel)]=\"contact.address.city\"> </div>\n        <div><label>State</label><input type=\"text\" [(ngModel)]=\"contact.address.state\"></div>\n        <div><label>Zip</label><input type=\"text\" [(ngModel)]=\"contact.address.zip\"></div>\n        <div><label>Image</label><input type=\"text\" [(ngModel)]=\"contact.picture\"></div>\n      </div>\n    \n      <hr>\n    \n      <div>\n        <!-- This button's ui-sref relatively targets the parent state, i.e., contacts.contact -->\n        <button class=\"btn btn-primary\" uiSref=\"^\"><i class=\"fa fa-close\"></i><span>Cancel</span></button>\n        <button class=\"btn btn-primary\" (click)=\"save(contact)\"><i class=\"fa fa-save\"></i><span>Save</span></button>\n        <button class=\"btn btn-primary\" (click)=\"remove(contact)\"><i class=\"fa fa-close\"></i><span>Delete</span></button>\n      </div>\n    </div>\n",
            styles: []
        }),
        __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Inject */])('$state$')), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ui_router_core__["StateService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ui_router_core__["StateService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__global_dialog_service__["a" /* DialogService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__global_dialog_service__["a" /* DialogService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__contacts_data_service__["a" /* ContactsDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__contacts_data_service__["a" /* ContactsDataService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ui_router_core__["StateDeclaration"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ui_router_core__["StateDeclaration"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ui_router_core__["TransitionService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ui_router_core__["TransitionService"]) === 'function' && _e) || Object])
    ], EditContactComponent);
    return EditContactComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/christhielen/projects/sample-app-ng2/src/edit-contact.component.js.map

/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * This component renders a read only view of the details for a single contact.
 */
var ContactDetailComponent = (function () {
    function ContactDetailComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(), 
        __metadata('design:type', Object)
    ], ContactDetailComponent.prototype, "contact", void 0);
    ContactDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
            selector: 'app-contact-detail',
            template: "\n  <div class=\"flex-h\">\n    <div class=\"details\">\n      <h3>{{contact.name.first}} {{contact.name.last}}</h3>\n      <div><label>Company</label><div>{{contact.company}}</div></div>\n      <div><label>Age</label><div>{{contact.age}}</div></div>\n      <div><label>Phone</label><div>{{contact.phone}}</div></div>\n      <div><label>Email</label><div>{{contact.email}}</div></div>\n      <div class=\"flex-h\">\n        <label>Address</label>\n        <div>{{contact.address.street}}<br>\n              {{contact.address.city}}, {{contact.address.state}} {{contact.address.zip}}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"flex nogrow\">\n      <img [src]=\"contact.picture\"/>\n    </div>\n  </div>\n",
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], ContactDetailComponent);
    return ContactDetailComponent;
}());
//# sourceMappingURL=/Users/christhielen/projects/sample-app-ng2/src/contact-detail.component.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * This component renders a list of contacts.
 *
 * At the top is a "new contact" button.
 * Each list item is a clickable link to the `contacts.contact` details substate
 */
var ContactListComponent = (function () {
    function ContactListComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(), 
        __metadata('design:type', Object)
    ], ContactListComponent.prototype, "contacts", void 0);
    ContactListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
            selector: 'app-contact-list',
            template: "\n  <ul class=\"selectlist list-unstyled\">\n    <li>\n      <!-- This link is a relative ui-sref to the contacts.new state. -->\n      <a uiSref=\".new\">\n        <button class=\"btn btn-primary\">\n          <i class=\"fa fa-pencil\"></i><span>New Contact</span>\n        </button>\n      </a>\n    </li>\n\n    <li>&nbsp;</li>\n\n    <!-- Highlight the selected contact:\n        When the current state matches the ui-sref's state (and its parameters)\n        ui-sref-active applies the 'selected' class to the li element -->\n    <li *ngFor=\"let contact of contacts\" >\n      <a uiSref=\".contact\" [uiParams]=\"{contactId: contact._id}\" uiSrefActive=\"selected\">\n        {{contact.name.first}} {{contact.name.last}}\n      </a>\n    </li>\n  </ul>\n",
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], ContactListComponent);
    return ContactListComponent;
}());
//# sourceMappingURL=/Users/christhielen/projects/sample-app-ng2/src/contact-list.component.js.map

/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contact_component__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contacts_component__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_contact_component__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contacts_data_service__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ui_router_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ui_router_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ui_router_core__);
/* unused harmony export getAllContacts */
/* unused harmony export contactsState */
/* unused harmony export getOneContact */
/* unused harmony export viewContactState */
/* unused harmony export editContactState */
/* unused harmony export getBlankContact */
/* unused harmony export newContactState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONTACTS_STATES; });





function getAllContacts(contactSvc) {
    return contactSvc.all();
}
/**
 * This state displays the contact list.
 * It also provides a nested ui-view (viewport) for child states to fill in.
 *
 * The contacts are fetched using a resolve.
 */
var contactsState = {
    parent: 'app',
    name: 'contacts',
    url: '/contacts',
    component: __WEBPACK_IMPORTED_MODULE_1__contacts_component__["a" /* ContactsComponent */],
    resolve: [
        // Resolve all the contacts.  The resolved contacts are injected into the controller.
        { token: 'contacts', deps: [__WEBPACK_IMPORTED_MODULE_3__contacts_data_service__["a" /* ContactsDataService */]], resolveFn: getAllContacts },
    ],
    data: { requiresAuth: true },
};
function getOneContact(contactSvc, $transition$) {
    return contactSvc.get($transition$.params().contactId);
}
/**
 * This state displays a single contact.
 * The contact to display is fetched using a resolve, based on the `contactId` parameter.
 */
var viewContactState = {
    name: 'contacts.contact',
    url: '/:contactId',
    component: __WEBPACK_IMPORTED_MODULE_0__contact_component__["a" /* ContactComponent */],
    resolve: [
        // Resolve the contact, based on the contactId parameter value.
        // The resolved contact is provided to the contactComponent's contact binding
        { token: 'contact', deps: [__WEBPACK_IMPORTED_MODULE_3__contacts_data_service__["a" /* ContactsDataService */], __WEBPACK_IMPORTED_MODULE_4_ui_router_core__["Transition"]], resolveFn: getOneContact },
    ],
};
/**
 * This state allows a user to edit a contact
 *
 * The contact data to edit is injected from the parent state's resolve.
 *
 * This state uses view targeting to replace the parent ui-view (which would normally be filled
 * by 'contacts.contact') with the edit contact template/controller
 */
var editContactState = {
    name: 'contacts.contact.edit',
    url: '/edit',
    views: {
        // Relatively target the grand-parent-state's $default (unnamed) ui-view
        // This could also have been written using ui-view@state addressing: $default@contacts
        // Or, this could also have been written using absolute ui-view addressing: !$default.$default.$default
        '^.^.$default': {
            bindings: { pristineContact: 'contact' },
            component: __WEBPACK_IMPORTED_MODULE_2__edit_contact_component__["a" /* EditContactComponent */],
        }
    },
};
function getBlankContact() {
    return { name: {}, address: {} };
}
/**
 * This state allows a user to create a new contact
 *
 * The contact data to edit is injected into the component from the parent state's resolve.
 */
var newContactState = {
    name: 'contacts.new',
    url: '/new',
    component: __WEBPACK_IMPORTED_MODULE_2__edit_contact_component__["a" /* EditContactComponent */],
    resolve: [
        { token: 'pristineContact', deps: [], resolveFn: getBlankContact }
    ],
};
var CONTACTS_STATES = [
    contactsState,
    viewContactState,
    editContactState,
    newContactState,
];
//# sourceMappingURL=/Users/christhielen/projects/sample-app-ng2/src/contacts.states.js.map

/***/ })

});
//# sourceMappingURL=1.bundle.map