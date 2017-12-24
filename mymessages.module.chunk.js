webpackJsonp(["mymessages.module"],{

/***/ "../../../../../src/app/mymessages/compose.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComposeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uirouter_core__ = __webpack_require__("../../../../@uirouter/core/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uirouter_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__uirouter_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_dialog_service__ = __webpack_require__("../../../../../src/app/global/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_app_config_service__ = __webpack_require__("../../../../../src/app/global/app-config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messages_data_service__ = __webpack_require__("../../../../../src/app/mymessages/messages-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_util__ = __webpack_require__("../../../../../src/app/util/util.ts");
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
var ComposeComponent = /** @class */ (function () {
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
        var messageParam = this.transition.params().message;
        this.pristineMessage = Object.assign({ from: this.appConfig.emailAddress }, messageParam);
        this.message = Object(__WEBPACK_IMPORTED_MODULE_5__util_util__["a" /* copy */])(this.pristineMessage);
    };
    /**
     * Checks if the edited copy and the pristine copy are identical when the state is changing.
     * If they are not identical, the allows the user to confirm navigating away without saving.
     */
    ComposeComponent.prototype.uiCanExit = function () {
        if (this.canExit || Object(__WEBPACK_IMPORTED_MODULE_1__uirouter_core__["equals"])(this.pristineMessage, this.message)) {
            return true;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-compose',
            template: "\n    <div class=\"compose\">\n      <div class=\"header\">\n        <div class=\"flex-h\"> <label>Recipient</label> <input type=\"text\" id=\"to\" name=\"to\" [(ngModel)]=\"message.to\"> </div>\n        <div class=\"flex-h\"> <label>Subject</label> <input type=\"text\" id=\"subject\" name=\"subject\" [(ngModel)]=\"message.subject\"> </div>\n      </div>\n    \n      <div class=\"body\">\n        <textarea name=\"body\" id=\"body\" [(ngModel)]=\"message.body\" cols=\"30\" rows=\"20\"></textarea>\n        \n        <div class=\"buttons\">\n          <!-- Clicking this button brings the user back to the state they came from (previous state) -->\n          <button class=\"btn btn-primary\" (click)=\"gotoPreviousState()\"><i class=\"fa fa-times-circle-o\"></i><span>Cancel</span></button>\n          <button class=\"btn btn-primary\" (click)=\"save(message)\"><i class=\"fa fa-save\"></i><span>Save as Draft</span></button>\n          <button class=\"btn btn-primary\" (click)=\"send(message)\"><i class=\"fa fa-paper-plane-o\"></i><span>Send</span></button>\n        </div>\n      </div>\n    </div>\n",
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__uirouter_core__["StateService"],
            __WEBPACK_IMPORTED_MODULE_1__uirouter_core__["TransitionService"],
            __WEBPACK_IMPORTED_MODULE_2__global_dialog_service__["a" /* DialogService */],
            __WEBPACK_IMPORTED_MODULE_3__global_app_config_service__["a" /* AppConfigService */],
            __WEBPACK_IMPORTED_MODULE_4__messages_data_service__["a" /* MessagesDataService */],
            __WEBPACK_IMPORTED_MODULE_1__uirouter_core__["Transition"]])
    ], ComposeComponent);
    return ComposeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mymessages/folder-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FolderListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
var FolderListComponent = /** @class */ (function () {
    function FolderListComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], FolderListComponent.prototype, "folders", void 0);
    FolderListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-folder-list',
            template: "\n    <!-- Renders a list of folders -->\n    <div class=\"folderlist\">\n      <ul class=\"selectlist list-unstyled\">\n        <!-- Highlight the selected folder:\n            When the current state matches the uiSref's state (and its parameters)\n            uiSrefActive applies the 'selected' class to the li element -->\n        <li class=\"folder\" uiSrefActive=\"selected\" *ngFor=\"let folder of folders\">\n          <!-- This uiSref is a relative link to the 'mymessages.messagelist' substate. It provides the\n              'folderId' parameter value from the current folder's .id property -->\n          <a uiSref=\".messagelist\" [uiParams]=\"{ folderId: folder._id }\"><i class=\"fa\"></i>{{ folder._id }}</a>\n        </li>\n      </ul>\n    </div>\n",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], FolderListComponent);
    return FolderListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mymessages/folders-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoldersDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_sessionStorage__ = __webpack_require__("../../../../../src/app/util/sessionStorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_app_config_service__ = __webpack_require__("../../../../../src/app/global/app-config.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var FoldersDataService = /** @class */ (function (_super) {
    __extends(FoldersDataService, _super);
    function FoldersDataService(appConfig) {
        return _super.call(this, 'folders', 'assets/folders.json', appConfig) || this;
    }
    FoldersDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__global_app_config_service__["a" /* AppConfigService */]])
    ], FoldersDataService);
    return FoldersDataService;
}(__WEBPACK_IMPORTED_MODULE_1__util_sessionStorage__["a" /* SessionStorage */]));



/***/ }),

/***/ "../../../../../src/app/mymessages/format-message.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatMessagePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormatMessagePipe = /** @class */ (function () {
    function FormatMessagePipe() {
    }
    FormatMessagePipe.prototype.transform = function (value, args) {
        return value.split(/\n/).map(function (p) { return "<p>" + p + "</p>"; }).join('\n');
    };
    FormatMessagePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'formatMessage'
        })
    ], FormatMessagePipe);
    return FormatMessagePipe;
}());



/***/ }),

/***/ "../../../../../src/app/mymessages/message-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
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
var MessageListComponent = /** @class */ (function () {
    function MessageListComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MessageListComponent.prototype, "folder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */])
    ], MessageListComponent.prototype, "messages$", void 0);
    MessageListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-message-list',
            template: "\n    <div class=\"messages\">\n      <app-message-table [columns]=\"folder.columns\" [messages]=\"messages$ | async\"></app-message-table>\n    </div>\n",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], MessageListComponent);
    return MessageListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mymessages/message-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
var MessageTableComponent = /** @class */ (function () {
    function MessageTableComponent() {
    }
    MessageTableComponent.prototype.colVisible = function (name) {
        return this.columns.indexOf(name) !== -1;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], MessageTableComponent.prototype, "columns", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], MessageTableComponent.prototype, "messages", void 0);
    MessageTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-message-table',
            template: "\n    <table>\n      <thead>\n        <tr>\n          <td *ngIf=\"colVisible('read')\"></td>\n          <td *ngIf=\"colVisible('from')\"    app-sort-messages prop=\"from\"    label=\"Sender\"></td>\n          <td *ngIf=\"colVisible('to')\"      app-sort-messages prop=\"to\"      label=\"Recipient\"></td>\n          <td *ngIf=\"colVisible('subject')\" app-sort-messages prop=\"subject\" label=\"Subject\"></td>\n          <td *ngIf=\"colVisible('date')\"    app-sort-messages prop=\"date\"    label=\"Date\"></td>\n        </tr>\n      </thead>\n  \n      <tbody>\n        <tr *ngFor=\"let message of messages\"\n            uiSref=\".message\" [uiParams]=\"{ messageId: message._id }\" uiSrefActive=\"active\">\n          <td *ngIf=\"colVisible('read')\"><i class=\"fa fa-circle\" style=\"font-size: 50%\" *ngIf=\"!message.read\"></i></td>\n          <td *ngIf=\"colVisible('from')\">{{ message.from }}</td>\n          <td *ngIf=\"colVisible('to')\">{{ message.to }}</td>\n          <td *ngIf=\"colVisible('subject')\">{{ message.subject }}</td>\n          <td *ngIf=\"colVisible('date')\">{{ message.date | date: \"yyyy-MM-dd\" }}</td>\n        </tr>\n      </tbody>\n  \n    </table>\n",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], MessageTableComponent);
    return MessageTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mymessages/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_util__ = __webpack_require__("../../../../../src/app/util/util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_dialog_service__ = __webpack_require__("../../../../../src/app/global/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_data_service__ = __webpack_require__("../../../../../src/app/mymessages/messages-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__uirouter_core__ = __webpack_require__("../../../../@uirouter/core/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__uirouter_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__uirouter_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
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
var MessageComponent = /** @class */ (function () {
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
        this.actions = this.folder.actions.reduce(function (obj, action) { return Object(__WEBPACK_IMPORTED_MODULE_1__util_util__["d" /* setProp */])(obj, action, true); }, {});
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "folder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */])
    ], MessageComponent.prototype, "proximalMessage$", void 0);
    MessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-message',
            template: "\n    <div class=\"message\">\n    \n      <div class=\"header\">\n        <div>\n          <h4>{{message.subject}}</h4>\n          <h5>{{message.from}} <i class=\"fa fa-long-arrow-right\"></i> {{message.to}}</h5>\n        </div>\n    \n        <div class=\"line2\">\n          <div>{{message.date | date: 'longDate'}} {{message.date | date: 'mediumTime'}}</div>\n          <div>\n            <button class=\"btn btn-primary\" *ngIf=\"actions.edit\" (click)=\"editDraft(message)\">\n              <i class=\"fa fa-pencil\"></i> <span>Edit Draft</span>\n            </button>\n            \n            <button class=\"btn btn-primary\" *ngIf=\"actions.reply\" (click)=\"reply(message)\">\n              <i class=\"fa fa-reply\"></i> <span>Reply</span>\n            </button>\n            \n            <button class=\"btn btn-primary\" *ngIf=\"actions.forward\" (click)=\"forward(message)\">\n              <i class=\"fa fa-forward\" ></i> <span>Forward</span>\n            </button>\n            \n            <button class=\"btn btn-primary\" *ngIf=\"actions.delete\" (click)=\"remove(message)\">\n              <i class=\"fa fa-close\"></i> <span>Delete</span>\n            </button>\n          </div>\n        </div>\n      </div>\n    \n      <!-- Pass the raw (plain text) message body through the messageBody filter to format slightly nicer. -->\n      <div class=\"body\" [innerHTML]=\"message.body | formatMessage\"></div>\n    </div>\n",
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__uirouter_core__["StateService"],
            __WEBPACK_IMPORTED_MODULE_2__global_dialog_service__["a" /* DialogService */],
            __WEBPACK_IMPORTED_MODULE_3__messages_data_service__["a" /* MessagesDataService */]])
    ], MessageComponent);
    return MessageComponent;
}());

/** Helper function to prefix a message with "fwd: " or "re: " */
var prefixSubject = function (prefix, message) { return prefix + message.subject; };
/** Helper function which quotes an email message */
var quoteMessage = function (message) { return "\n\n\n\n---------------------------------------\nOriginal message:\nFrom: " + message.from + "\nDate: " + message.date + "\nSubject: " + message.subject + "\n\n" + message.body; };
/** Helper function to make a response message object */
function makeResponseMsg(subjectPrefix, origMsg) {
    return {
        from: origMsg.to,
        to: origMsg.from,
        subject: prefixSubject(subjectPrefix, origMsg),
        body: quoteMessage(origMsg)
    };
}


/***/ }),

/***/ "../../../../../src/app/mymessages/messages-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_sessionStorage__ = __webpack_require__("../../../../../src/app/util/sessionStorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_app_config_service__ = __webpack_require__("../../../../../src/app/global/app-config.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var MessagesDataService = /** @class */ (function (_super) {
    __extends(MessagesDataService, _super);
    function MessagesDataService(appConfig) {
        // http://beta.json-generator.com/api/json/get/VJl5GbIze
        return _super.call(this, 'messages', 'assets/messages.json', appConfig) || this;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__global_app_config_service__["a" /* AppConfigService */]])
    ], MessagesDataService);
    return MessagesDataService;
}(__WEBPACK_IMPORTED_MODULE_1__util_sessionStorage__["a" /* SessionStorage */]));



/***/ }),

/***/ "../../../../../src/app/mymessages/mymessages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MymessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
var MymessagesComponent = /** @class */ (function () {
    function MymessagesComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], MymessagesComponent.prototype, "folders", void 0);
    MymessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mymessages',
            template: "\n    <div class=\"my-messages\">\n    \n      <!-- Show message folders -->\n      <app-folder-list [folders]=\"folders\"></app-folder-list>\n    \n      <!-- A named view for the list of messages in this folder.  This will be  filled in by the 'mymessages.messagelist' child state -->\n      <ui-view name=\"messagelist\" class=\"messagelist\"></ui-view>\n    \n    </div>\n    \n    <!-- A named ui-view for a message's contents.  The 'mymessages.messagelist.message' grandchild state plugs into this ui-view -->\n    <ui-view name=\"messagecontent\"></ui-view>\n",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], MymessagesComponent);
    return MymessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mymessages/mymessages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MymessagesModule", function() { return MymessagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compose_component__ = __webpack_require__("../../../../../src/app/mymessages/compose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_component__ = __webpack_require__("../../../../../src/app/mymessages/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_list_component__ = __webpack_require__("../../../../../src/app/mymessages/message-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mymessages_component__ = __webpack_require__("../../../../../src/app/mymessages/mymessages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mymessages_states__ = __webpack_require__("../../../../../src/app/mymessages/mymessages.states.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__messages_data_service__ = __webpack_require__("../../../../../src/app/mymessages/messages-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__folders_data_service__ = __webpack_require__("../../../../../src/app/mymessages/folders-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__folder_list_component__ = __webpack_require__("../../../../../src/app/mymessages/folder-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__message_table_component__ = __webpack_require__("../../../../../src/app/mymessages/message-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sort_messages_component__ = __webpack_require__("../../../../../src/app/mymessages/sort-messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__format_message_pipe__ = __webpack_require__("../../../../../src/app/mymessages/format-message.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var MymessagesModule = /** @class */ (function () {
    function MymessagesModule() {
    }
    MymessagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__uirouter_angular__["UIRouterModule"].forChild({ states: __WEBPACK_IMPORTED_MODULE_7__mymessages_states__["a" /* MYMESSAGES_STATES */] }),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
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
        })
    ], MymessagesModule);
    return MymessagesModule;
}());



/***/ }),

/***/ "../../../../../src/app/mymessages/mymessages.states.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose_component__ = __webpack_require__("../../../../../src/app/mymessages/compose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_list_component__ = __webpack_require__("../../../../../src/app/mymessages/message-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_component__ = __webpack_require__("../../../../../src/app/mymessages/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mymessages_component__ = __webpack_require__("../../../../../src/app/mymessages/mymessages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__uirouter_core__ = __webpack_require__("../../../../@uirouter/core/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__uirouter_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__uirouter_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__folders_data_service__ = __webpack_require__("../../../../../src/app/mymessages/folders-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__messages_data_service__ = __webpack_require__("../../../../../src/app/mymessages/messages-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_app_config_service__ = __webpack_require__("../../../../../src/app/global/app-config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");









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
        messagelist: {
            component: __WEBPACK_IMPORTED_MODULE_1__message_list_component__["a" /* MessageListComponent */],
        },
    },
    resolve: [
        // Fetch the current folder from the Folders service, using the folderId parameter
        { token: 'folder', deps: [__WEBPACK_IMPORTED_MODULE_5__folders_data_service__["a" /* FoldersDataService */], __WEBPACK_IMPORTED_MODULE_4__uirouter_core__["Transition"]], resolveFn: getFolder },
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
        '^.^.messagecontent': {
            component: __WEBPACK_IMPORTED_MODULE_2__message_component__["a" /* MessageComponent */],
        },
    },
    resolve: [
        // Fetch the message from the Messages service using the messageId parameter
        { token: 'message', deps: [__WEBPACK_IMPORTED_MODULE_6__messages_data_service__["a" /* MessagesDataService */], __WEBPACK_IMPORTED_MODULE_4__uirouter_core__["Transition"]], resolveFn: getMessage },
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


/***/ }),

/***/ "../../../../../src/app/mymessages/sort-messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortMessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_app_config_service__ = __webpack_require__("../../../../../src/app/global/app-config.service.ts");
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
var SortMessagesComponent = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('prop'),
        __metadata("design:type", String)
    ], SortMessagesComponent.prototype, "prop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('label'),
        __metadata("design:type", String)
    ], SortMessagesComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SortMessagesComponent.prototype, "onClick", null);
    SortMessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-sort-messages]',
            template: "\n    <i style='padding-left: 0.25em' \n      class='fa' \n      [class.fa-sort-asc]=\"asc\" \n      [class.fa-sort-desc]=\"desc\"\n    ></i>{{ label }}\n",
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__global_app_config_service__["a" /* AppConfigService */]])
    ], SortMessagesComponent);
    return SortMessagesComponent;
}());



/***/ })

});
//# sourceMappingURL=mymessages.module.chunk.js.map