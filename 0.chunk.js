webpackJsonp([0,7],{

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compose_component__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_component__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_list_component__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mymessages_component__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ui_router_ng2__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mymessages_states__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__messages_data_service__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__folders_data_service__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__folder_list_component__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__message_table_component__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sort_messages_component__ = __webpack_require__(805);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__format_message_pipe__ = __webpack_require__(802);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MymessagesModule", function() { return MymessagesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var MymessagesModule = (function () {
    function MymessagesModule() {
    }
    MymessagesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_6_ui_router_ng2__["UIRouterModule"].forChild({ states: __WEBPACK_IMPORTED_MODULE_7__mymessages_states__["a" /* MYMESSAGES_STATES */] }),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__compose_component__["a" /* ComposeComponent */],
                __WEBPACK_IMPORTED_MODULE_3__message_component__["a" /* MessageComponent */],
                __WEBPACK_IMPORTED_MODULE_4__message_list_component__["a" /* MessageListComponent */],
                __WEBPACK_IMPORTED_MODULE_5__mymessages_component__["a" /* MymessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__folder_list_component__["a" /* FolderListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__message_table_component__["a" /* MessageTableComponent */],
                __WEBPACK_IMPORTED_MODULE_13__sort_messages_component__["a" /* SortMessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_14__format_message_pipe__["a" /* FormatMessagePipe */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__messages_data_service__["a" /* MessagesDataService */],
                __WEBPACK_IMPORTED_MODULE_10__folders_data_service__["a" /* FoldersDataService */],
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MymessagesModule);
    return MymessagesModule;
}());
//# sourceMappingURL=/Users/christhielen/projects/sample-app-ng2/src/mymessages.module.js.map

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_sessionStorage__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_app_config_service__ = __webpack_require__(120);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesDataService; });
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



/** A fake REST client API for Messages resources */
var MessagesDataService = (function (_super) {
    __extends(MessagesDataService, _super);
    function MessagesDataService(appConfig) {
        // http://beta.json-generator.com/api/json/get/VJl5GbIze
        _super.call(this, 'messages', 'assets/messages.json', appConfig);
    }
    MessagesDataService.sortedMessages = function (messages, sortOrder) {
        var getField = function (message) {
            return message[sortOrder.sortBy].toString();
        };
        return messages.slice().sort(function (a, b) {
            return getField(a).localeCompare(getField(b)) * sortOrder.order;
        });
    };
    MessagesDataService.prototype.byFolder = function (folder) {
        var searchObject = { folder: folder._id };
        var toFromAttr = ['drafts', 'sent'].indexOf(folder._id) !== -1 ? 'from' : 'to';
        searchObject[toFromAttr] = this.appConfig.emailAddress;
        return this.search(searchObject);
    };
    MessagesDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__global_app_config_service__["a" /* AppConfigService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__global_app_config_service__["a" /* AppConfigService */]) === 'function' && _a) || Object])
    ], MessagesDataService);
    return MessagesDataService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_1__util_sessionStorage__["a" /* SessionStorage */]));
//# sourceMappingURL=/Users/christhielen/projects/sample-app-ng2/src/messages-data.service.js.map

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

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_sessionStorage__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_app_config_service__ = __webpack_require__(120);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoldersDataService; });
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



/** A fake REST client API for Folders resources */
var FoldersDataService = (function (_super) {
    __extends(FoldersDataService, _super);
    function FoldersDataService(appConfig) {
        _super.call(this, 'folders', 'assets/folders.json', appConfig);
    }
    FoldersDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__global_app_config_service__["a" /* AppConfigService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__global_app_config_service__["a" /* AppConfigService */]) === 'function' && _a) || Object])
    ], FoldersDataService);
    return FoldersDataService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_1__util_sessionStorage__["a" /* SessionStorage */]));
//# sourceMappingURL=/Users/christhielen/projects/sample-app-ng2/src/folders-data.service.js.map

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ui_router_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ui_router_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ui_router_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_dialog_service__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_app_config_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messages_data_service__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_util__ = __webpack_require__(271);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComposeComponent; });
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
 * This component composes a message
 *
 * The message might be new, a saved draft, or a reply/forward.
 * A Cancel button discards the new message and returns to the previous state.
 * A Save As Draft button saves the message to the "drafts" folder.
 * A Send button sends the message
 */
var ComposeComponent = (function () {
    function ComposeComponent(stateService, transitionService, DialogService, appConfig, messagesService, transition) {
        this.stateService = stateService;
        this.transitionService = transitionService;
        this.DialogService = DialogService;
        this.appConfig = appConfig;
        this.messagesService = messagesService;
        this.transition = transition;
    }
    /**
     * Create our message's model using the current user's email address as 'message.from'
     * Then extend it with all the properties from (non-url) state parameter 'message'.
     * Keep two copies: the editable one and the original one.
     * These copies are used to check if the message is dirty.
     */
    ComposeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var messageParam = this.transition.params().message;
        this.pristineMessage = Object.assign({ from: this.appConfig.emailAddress }, messageParam);
        this.message = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util_util__["e" /* copy */])(this.pristineMessage);
        // Temporary hack until uiCanExit officially lands in ui-router-ng2 1.0.0-beta.5
        this.deregister = this.transitionService.onStart({ exiting: 'mymessages.compose' }, function () { return _this.uiCanExit(); });
    };
    ComposeComponent.prototype.ngOnDestroy = function () {
        if (this.deregister) {
            this.deregister();
        }
    };
    /**
     * Checks if the edited copy and the pristine copy are identical when the state is changing.
     * If they are not identical, the allows the user to confirm navigating away without saving.
     */
    ComposeComponent.prototype.uiCanExit = function () {
        if (this.canExit || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ui_router_core__["equals"])(this.pristineMessage, this.message)) {
            return Promise.resolve(true);
        }
        var message = 'You have not saved this message.';
        var question = 'Navigate away and lose changes?';
        return this.DialogService.confirm(message, question, 'Yes', 'No');
    };
    /**
     * Navigates back to the previous state.
     *
     * - Checks the $transition$ which activated this controller for a 'from state' that isn't the implicit root state.
     * - If there is no previous state (because the user deep-linked in, etc), then go to 'mymessages.messagelist'
     */
    ComposeComponent.prototype.gotoPreviousState = function () {
        var transition = this.transition;
        var hasPrevious = !!transition.from().name;
        var state = hasPrevious ? transition.from() : 'mymessages.messagelist';
        var params = hasPrevious ? transition.params('from') : {};
        this.stateService.go(state, params);
    };
    ;
    /** "Send" the message (save to the 'sent' folder), and then go to the previous state */
    ComposeComponent.prototype.send = function (message) {
        var _this = this;
        this.messagesService.save(Object.assign(message, { date: new Date(), read: true, folder: 'sent' }))
            .then(function () { return _this.canExit = true; })
            .then(function () { return _this.gotoPreviousState(); });
    };
    ;
    /** Save the message to the 'drafts' folder, and then go to the previous state */
    ComposeComponent.prototype.save = function (message) {
        var _this = this;
        this.messagesService.save(Object.assign(message, { date: new Date(), read: true, folder: 'drafts' }))
            .then(function () { return _this.canExit = true; })
            .then(function () { return _this.gotoPreviousState(); });
    };
    ComposeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
            selector: 'app-compose',
            template: "\n    <div class=\"compose\">\n      <div class=\"header\">\n        <div class=\"flex-h\"> <label>Recipient</label> <input type=\"text\" id=\"to\" name=\"to\" [(ngModel)]=\"message.to\"> </div>\n        <div class=\"flex-h\"> <label>Subject</label> <input type=\"text\" id=\"subject\" name=\"subject\" [(ngModel)]=\"message.subject\"> </div>\n      </div>\n    \n      <div class=\"body\">\n        <textarea name=\"body\" id=\"body\" [(ngModel)]=\"message.body\" cols=\"30\" rows=\"20\"></textarea>\n        \n        <div class=\"buttons\">\n          <!-- Clicking this button brings the user back to the state they came from (previous state) -->\n          <button class=\"btn btn-primary\" (click)=\"gotoPreviousState()\"><i class=\"fa fa-times-circle-o\"></i><span>Cancel</span></button>\n          <button class=\"btn btn-primary\" (click)=\"save(message)\"><i class=\"fa fa-save\"></i><span>Save as Draft</span></button>\n          <button class=\"btn btn-primary\" (click)=\"send(message)\"><i class=\"fa fa-paper-plane-o\"></i><span>Send</span></button>\n        </div>\n      </div>\n    </div>\n",
            styles: []
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ui_router_core__["StateService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ui_router_core__["StateService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ui_router_core__["TransitionService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ui_router_core__["TransitionService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__global_dialog_service__["a" /* DialogService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__global_dialog_service__["a" /* DialogService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__global_app_config_service__["a" /* AppConfigService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__global_app_config_service__["a" /* AppConfigService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__messages_data_service__["a" /* MessagesDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__messages_data_service__["a" /* MessagesDataService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ui_router_core__["Transition"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ui_router_core__["Transition"]) === 'function' && _f) || Object])
    ], ComposeComponent);
    return ComposeComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Users/christhielen/projects/sample-app-ng2/src/compose.component.js.map

/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageListComponent; });
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
 * This component renders a list of messages using the `messageTable` component
 */
var MessageListComponent = (function () {
    function MessageListComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(), 
        __metadata('design:type', Object)
    ], MessageListComponent.prototype, "folder", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]) === 'function' && _a) || Object)
    ], MessageListComponent.prototype, "messages$", void 0);
    MessageListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
            selector: 'app-message-list',
            template: "\n    <div class=\"messages\">\n      <app-message-table [columns]=\"folder.columns\" [messages]=\"messages$ | async\"></app-message-table>\n    </div>\n",
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], MessageListComponent);
    return MessageListComponent;
    var _a;
}());
//# sourceMappingURL=/Users/christhielen/projects/sample-app-ng2/src/message-list.component.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_util__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_dialog_service__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_data_service__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ui_router_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ui_router_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ui_router_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__folders_data_service__ = __webpack_require__(789);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
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
 * This component renders a single message
 *
 * Buttons perform actions related to the message.
 * Buttons are shown/hidden based on the folder's context.
 * For instance, a "draft" message can be edited, but can't be replied to.
 */
var MessageComponent = (function () {
    function MessageComponent(stateService, dialog, messagesService) {
        this.stateService = stateService;
        this.dialog = dialog;
        this.messagesService = messagesService;
    }
    /**
     * When the user views a message, mark it as read and save (PUT) the resource.
     *
     * Apply the available actions for the message, depending on the folder the message belongs to.
     */
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.message.read = true;
        this.messagesService.put(this.message);
        this.actions = this.folder.actions.reduce(function (obj, action) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_util__["d" /* setProp */])(obj, action, true); }, {});
        this.proximalMessageSub = this.proximalMessage$.subscribe(function (message) { return _this.proximalMessage = message; });
    };
    /**
     * Compose a new message as a reply to this one
     */
    MessageComponent.prototype.reply = function (message) {
        var replyMsg = makeResponseMsg('Re: ', message);
        this.stateService.go('mymessages.compose', { message: replyMsg });
    };
    ;
    /**
     * Compose a new message as a forward of this one.
     */
    MessageComponent.prototype.forward = function (message) {
        var fwdMsg = makeResponseMsg('Fwd: ', message);
        delete fwdMsg.to;
        this.stateService.go('mymessages.compose', { message: fwdMsg });
    };
    ;
    /**
     * Continue composing this (draft) message
     */
    MessageComponent.prototype.editDraft = function (message) {
        this.stateService.go('mymessages.compose', { message: message });
    };
    ;
    /**
     * Delete this message.
     *
     * - confirm deletion
     * - delete the message
     * - determine which message should be active
     * - show that message
     */
    MessageComponent.prototype.remove = function (message) {
        var _this = this;
        var nextMessageId = this.proximalMessage && this.proximalMessage._id;
        var nextState = nextMessageId ? 'mymessages.messagelist.message' : 'mymessages.messagelist';
        var params = { messageId: nextMessageId };
        this.dialog.confirm('Delete?', undefined)
            .then(function () { return _this.messagesService.remove(message); })
            .then(function () { return _this.stateService.go(nextState, params, { reload: 'mymessages.messagelist' }); });
    };
    ;
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__folders_data_service__["Folder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__folders_data_service__["Folder"]) === 'function' && _a) || Object)
    ], MessageComponent.prototype, "folder", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__messages_data_service__["Message"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__messages_data_service__["Message"]) === 'function' && _b) || Object)
    ], MessageComponent.prototype, "message", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"]) === 'function' && _c) || Object)
    ], MessageComponent.prototype, "proximalMessage$", void 0);
    MessageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
            selector: 'app-message',
            template: "\n    <div class=\"message\">\n    \n      <div class=\"header\">\n        <div>\n          <h4>{{message.subject}}</h4>\n          <h5>{{message.from}} <i class=\"fa fa-long-arrow-right\"></i> {{message.to}}</h5>\n        </div>\n    \n        <div class=\"line2\">\n          <div>{{message.date | date: 'longDate'}} {{message.date | date: 'mediumTime'}}</div>\n          <div>\n            <button class=\"btn btn-primary\" *ngIf=\"actions.edit\" (click)=\"editDraft(message)\">\n              <i class=\"fa fa-pencil\"></i> <span>Edit Draft</span>\n            </button>\n            \n            <button class=\"btn btn-primary\" *ngIf=\"actions.reply\" (click)=\"reply(message)\">\n              <i class=\"fa fa-reply\"></i> <span>Reply</span>\n            </button>\n            \n            <button class=\"btn btn-primary\" *ngIf=\"actions.forward\" (click)=\"forward(message)\">\n              <i class=\"fa fa-forward\" ></i> <span>Forward</span>\n            </button>\n            \n            <button class=\"btn btn-primary\" *ngIf=\"actions.delete\" (click)=\"remove(message)\">\n              <i class=\"fa fa-close\"></i> <span>Delete</span>\n            </button>\n          </div>\n        </div>\n      </div>\n    \n      <!-- Pass the raw (plain text) message body through the messageBody filter to format slightly nicer. -->\n      <div class=\"body\" [innerHTML]=\"message.body | formatMessage\"></div>\n    </div>\n",
            styles: []
        }), 
        __metadata('design:paramtypes', [(typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ui_router_core__["StateService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_ui_router_core__["StateService"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__global_dialog_service__["a" /* DialogService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__global_dialog_service__["a" /* DialogService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__messages_data_service__["a" /* MessagesDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__messages_data_service__["a" /* MessagesDataService */]) === 'function' && _f) || Object])
    ], MessageComponent);
    return MessageComponent;
    var _a, _b, _c, _d, _e, _f;
}());
/** Helper function to prefix a message with "fwd: " or "re: " */
var prefixSubject = function (prefix, message) { return prefix + message.subject; };
/** Helper function which quotes an email message */
var quoteMessage = function (message) { return ("\n\n\n\n---------------------------------------\nOriginal message:\nFrom: " + message.from + "\nDate: " + message.date + "\nSubject: " + message.subject + "\n\n" + message.body); };
/** Helper function to make a response message object */
function makeResponseMsg(subjectPrefix, origMsg) {
    return {
        from: origMsg.to,
        to: origMsg.from,
        subject: prefixSubject(subjectPrefix, origMsg),
        body: quoteMessage(origMsg)
    };
}
//# sourceMappingURL=/Users/christhielen/projects/sample-app-ng2/src/message.component.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MymessagesComponent; });
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
 * The main mymessages component.
 *
 * Renders a list of folders, and has two viewports:
 * - messageList: filled with the list of messages for a folder
 * - messagecontent: filled with the contents of a single message.
 */
var MymessagesComponent = (function () {
    function MymessagesComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(), 
        __metadata('design:type', Array)
    ], MymessagesComponent.prototype, "folders", void 0);
    MymessagesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
            selector: 'app-mymessages',
            template: "\n    <div class=\"my-messages\">\n    \n      <!-- Show message folders -->\n      <app-folder-list [folders]=\"folders\"></app-folder-list>\n    \n      <!-- A named view for the list of messages in this folder.  This will be  filled in by the 'mymessages.messagelist' child state -->\n      <ui-view name=\"messagelist\" class=\"messagelist\"></ui-view>\n    \n    </div>\n    \n    <!-- A named ui-view for a message's contents.  The 'mymessages.messagelist.message' grandchild state plugs into this ui-view -->\n    <ui-view name=\"messagecontent\"></ui-view>\n",
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], MymessagesComponent);
    return MymessagesComponent;
}());
//# sourceMappingURL=/Users/christhielen/projects/sample-app-ng2/src/mymessages.component.js.map

/***/ }),

/***/ 801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FolderListComponent; });
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
 * Renders a list of folders
 */
var FolderListComponent = (function () {
    function FolderListComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(), 
        __metadata('design:type', Array)
    ], FolderListComponent.prototype, "folders", void 0);
    FolderListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
            selector: 'app-folder-list',
            template: "\n    <!-- Renders a list of folders -->\n    <div class=\"folderlist\">\n      <ul class=\"selectlist list-unstyled\">\n        <!-- Highlight the selected folder:\n            When the current state matches the uiSref's state (and its parameters)\n            uiSrefActive applies the 'selected' class to the li element -->\n        <li class=\"folder\" uiSrefActive=\"selected\" *ngFor=\"let folder of folders\">\n          <!-- This uiSref is a relative link to the 'mymessages.messagelist' substate. It provides the\n              'folderId' parameter value from the current folder's .id property -->\n          <a uiSref=\".messagelist\" [uiParams]=\"{ folderId: folder._id }\"><i class=\"fa\"></i>{{ folder._id }}</a>\n        </li>\n      </ul>\n    </div>\n",
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], FolderListComponent);
    return FolderListComponent;
}());
//# sourceMappingURL=/Users/christhielen/projects/sample-app-ng2/src/folder-list.component.js.map

/***/ }),

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatMessagePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormatMessagePipe = (function () {
    function FormatMessagePipe() {
    }
    FormatMessagePipe.prototype.transform = function (value, args) {
        return value.split(/\n/).map(function (p) { return ("<p>" + p + "</p>"); }).join('\n');
    };
    FormatMessagePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Pipe */])({
            name: 'formatMessage'
        }), 
        __metadata('design:paramtypes', [])
    ], FormatMessagePipe);
    return FormatMessagePipe;
}());
//# sourceMappingURL=/Users/christhielen/projects/sample-app-ng2/src/format-message.pipe.js.map

/***/ }),

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageTableComponent; });
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
 * A component that displays a folder of messages as a table
 *
 * If a row is clicked, the details of the message is shown using a relative ui-sref to `.message`.
 *
 * ui-sref-active is used to highlight the selected row.
 *
 * Shows/hides specific columns based on the `columns` input binding.
 */
var MessageTableComponent = (function () {
    function MessageTableComponent() {
    }
    MessageTableComponent.prototype.colVisible = function (name) {
        return this.columns.indexOf(name) !== -1;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(), 
        __metadata('design:type', Array)
    ], MessageTableComponent.prototype, "columns", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(), 
        __metadata('design:type', Array)
    ], MessageTableComponent.prototype, "messages", void 0);
    MessageTableComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
            selector: 'app-message-table',
            template: "\n    <table>\n      <thead>\n        <tr>\n          <td *ngIf=\"colVisible('read')\"></td>\n          <td *ngIf=\"colVisible('from')\"    app-sort-messages prop=\"from\"    label=\"Sender\"></td>\n          <td *ngIf=\"colVisible('to')\"      app-sort-messages prop=\"to\"      label=\"Recipient\"></td>\n          <td *ngIf=\"colVisible('subject')\" app-sort-messages prop=\"subject\" label=\"Subject\"></td>\n          <td *ngIf=\"colVisible('date')\"    app-sort-messages prop=\"date\"    label=\"Date\"></td>\n        </tr>\n      </thead>\n  \n      <tbody>\n        <tr *ngFor=\"let message of messages\"\n            uiSref=\".message\" [uiParams]=\"{ messageId: message._id }\" uiSrefActive=\"active\">\n          <td *ngIf=\"colVisible('read')\"><i class=\"fa fa-circle\" style=\"font-size: 50%\" *ngIf=\"!message.read\"></i></td>\n          <td *ngIf=\"colVisible('from')\">{{ message.from }}</td>\n          <td *ngIf=\"colVisible('to')\">{{ message.to }}</td>\n          <td *ngIf=\"colVisible('subject')\">{{ message.subject }}</td>\n          <td *ngIf=\"colVisible('date')\">{{ message.date | date: \"yyyy-MM-dd\" }}</td>\n        </tr>\n      </tbody>\n  \n    </table>\n",
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], MessageTableComponent);
    return MessageTableComponent;
}());
//# sourceMappingURL=/Users/christhielen/projects/sample-app-ng2/src/message-table.component.js.map

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose_component__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_list_component__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_component__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mymessages_component__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ui_router_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ui_router_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ui_router_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__folders_data_service__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__messages_data_service__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_app_config_service__ = __webpack_require__(120);
/* unused harmony export getFolders */
/* unused harmony export mymessagesState */
/* unused harmony export getFolder */
/* unused harmony export getMessages */
/* unused harmony export messageListState */
/* unused harmony export getMessage */
/* unused harmony export getProximalMessage */
/* unused harmony export messageState */
/* unused harmony export composeState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MYMESSAGES_STATES; });








function getFolders(foldersService) {
    return foldersService.all();
}
/**
 * The mymessages state. This is the main state for the mymessages submodule.
 *
 * This state shows the list of folders for the current user. It retrieves the folders from the
 * Folders service.  If a user navigates directly to this state, the state redirects to the 'mymessages.messagelist'.
 */
var mymessagesState = {
    parent: 'app',
    name: 'mymessages',
    url: '/mymessages',
    component: __WEBPACK_IMPORTED_MODULE_3__mymessages_component__["a" /* MymessagesComponent */],
    resolve: [
        // All the folders are fetched from the Folders service
        { token: 'folders', deps: [__WEBPACK_IMPORTED_MODULE_5__folders_data_service__["a" /* FoldersDataService */]], resolveFn: getFolders },
    ],
    // If mymessages state is directly activated, redirect the transition to the child state 'mymessages.messagelist'
    redirectTo: 'mymessages.messagelist',
    // Mark this state as requiring authentication.  See ../routerhooks/requiresAuth.js.
    data: { requiresAuth: true }
};
function getFolder(foldersService, transition) {
    return foldersService.get(transition.params().folderId);
}
function getMessages(messagesService, folder, appConfig) {
    var promise = messagesService.byFolder(folder);
    return promise.then(function (messages) { return appConfig.sort$.map(function (sortOrder) {
        return __WEBPACK_IMPORTED_MODULE_6__messages_data_service__["a" /* MessagesDataService */].sortedMessages(messages, sortOrder);
    }); });
}
/**
 * This state shows the contents (a message list) of a single folder
 */
var messageListState = {
    name: 'mymessages.messagelist',
    url: '/:folderId',
    // The folderId parameter is part of the URL.  This params block sets 'inbox' as the default value.
    // If no parameter value for folderId is provided on the transition, then it will be defaulted to 'inbox'
    params: { folderId: 'inbox' },
    views: {
        // This targets the "messagelist" named ui-view added to the DOM in the parent state 'mymessages'
        messagelist: { component: __WEBPACK_IMPORTED_MODULE_1__message_list_component__["a" /* MessageListComponent */] },
    },
    resolve: [
        // Fetch the current folder from the Folders service, using the folderId parameter
        { token: 'folder', deps: [__WEBPACK_IMPORTED_MODULE_5__folders_data_service__["a" /* FoldersDataService */], __WEBPACK_IMPORTED_MODULE_4_ui_router_core__["Transition"]], resolveFn: getFolder },
        // The folder object (from the resolve above) is injected into this resolve
        // The list of message for the folder are fetched from the Messages service
        { token: 'messages$', deps: [__WEBPACK_IMPORTED_MODULE_6__messages_data_service__["a" /* MessagesDataService */], 'folder', __WEBPACK_IMPORTED_MODULE_7__global_app_config_service__["a" /* AppConfigService */]], resolveFn: getMessages },
    ],
};
function getMessage(messagesService, transition) {
    return messagesService.get(transition.params().messageId);
}
function getProximalMessage(messages$, message) {
    return messages$.map(function (messages) {
        var curIdx = messages.indexOf(message);
        var nextIdx = curIdx === messages.length ? curIdx - 1 : curIdx + 1;
        return messages[nextIdx];
    });
}
/**
 * This state shows the contents of a single message.
 * It also has UI to reply, forward, delete, or edit an existing draft.
 */
var messageState = {
    name: 'mymessages.messagelist.message',
    url: '/:messageId',
    views: {
        // Relatively target the parent-state's parent-state's 'messagecontent' ui-view
        // This could also have been written using ui-view@state addressing: 'messagecontent@mymessages'
        // Or, this could also have been written using absolute ui-view addressing: '!$default.$default.messagecontent'
        '^.^.messagecontent': { component: __WEBPACK_IMPORTED_MODULE_2__message_component__["a" /* MessageComponent */] },
    },
    resolve: [
        // Fetch the message from the Messages service using the messageId parameter
        { token: 'message', deps: [__WEBPACK_IMPORTED_MODULE_6__messages_data_service__["a" /* MessagesDataService */], __WEBPACK_IMPORTED_MODULE_4_ui_router_core__["Transition"]], resolveFn: getMessage },
        // Provide the component with the next closest message to activate if the current message is deleted
        { token: 'proximalMessage$', deps: ['messages$', 'message'], resolveFn: getProximalMessage }
    ],
};
/**
 * This state allows the user to compose a new message, edit a drafted message, send a message,
 * or save an unsent message as a draft.
 *
 * This state uses view-targeting to take over the ui-view that would normally be filled by the 'mymessages' state.
 */
var composeState = {
    name: 'mymessages.compose',
    url: '/compose',
    views: {
        // Absolutely targets the $default (unnamed) ui-view, two nesting levels down with the composeComponent.
        '!$default.$default': { component: __WEBPACK_IMPORTED_MODULE_0__compose_component__["a" /* ComposeComponent */] }
    },
    // Declares that this state has a 'message' parameter, that defaults to an empty object.
    // Note the parameter does not appear in the URL.
    params: {
        message: {}
    },
};
var MYMESSAGES_STATES = [
    mymessagesState,
    messageListState,
    messageState,
    composeState,
];
//# sourceMappingURL=/Users/christhielen/projects/sample-app-ng2/src/mymessages.states.js.map

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_app_config_service__ = __webpack_require__(120);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortMessagesComponent; });
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
 * A directive (for a table header) which changes the app's sort order
 */
var SortMessagesComponent = (function () {
    function SortMessagesComponent(appConfig) {
        this.appConfig = appConfig;
    }
    SortMessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sub = this.appConfig.sort$.subscribe(function () { return _this.update(); });
    };
    SortMessagesComponent.prototype.ngOnDestroy = function () {
        this._sub.unsubscribe();
    };
    SortMessagesComponent.prototype.update = function () {
        var sort = this.appConfig.sort$.value;
        var matches = sort.sortBy === this.prop;
        this.asc = matches && sort.order < 0;
        this.desc = matches && sort.order > 0;
    };
    SortMessagesComponent.prototype.onClick = function (e) {
        this.appConfig.sort = (this.asc ? '+' : '-') + this.prop;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])('prop'), 
        __metadata('design:type', String)
    ], SortMessagesComponent.prototype, "prop", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])('label'), 
        __metadata('design:type', String)
    ], SortMessagesComponent.prototype, "label", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* HostListener */])('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], SortMessagesComponent.prototype, "onClick", null);
    SortMessagesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
            selector: '[app-sort-messages]',
            template: "\n    <i style='padding-left: 0.25em' \n      class='fa' \n      [class.fa-sort-asc]=\"asc\" \n      [class.fa-sort-desc]=\"desc\"\n    ></i>{{ label }}\n",
            styles: []
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__global_app_config_service__["a" /* AppConfigService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__global_app_config_service__["a" /* AppConfigService */]) === 'function' && _a) || Object])
    ], SortMessagesComponent);
    return SortMessagesComponent;
    var _a;
}());
//# sourceMappingURL=/Users/christhielen/projects/sample-app-ng2/src/sort-messages.component.js.map

/***/ })

});
//# sourceMappingURL=0.bundle.map