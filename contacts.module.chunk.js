webpackJsonp(["contacts.module"],{

/***/ "../../../../../src/app/contacts/contact-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailComponent; });
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
 * This component renders a read only view of the details for a single contact.
 */
var ContactDetailComponent = /** @class */ (function () {
    function ContactDetailComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContactDetailComponent.prototype, "contact", void 0);
    ContactDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact-detail',
            template: "\n  <div class=\"flex-h\">\n    <div class=\"details\">\n      <h3>{{contact.name.first}} {{contact.name.last}}</h3>\n      <div><label>Company</label><div>{{contact.company}}</div></div>\n      <div><label>Age</label><div>{{contact.age}}</div></div>\n      <div><label>Phone</label><div>{{contact.phone}}</div></div>\n      <div><label>Email</label><div>{{contact.email}}</div></div>\n      <div class=\"flex-h\">\n        <label>Address</label>\n        <div>{{contact.address.street}}<br>\n              {{contact.address.city}}, {{contact.address.state}} {{contact.address.zip}}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"flex nogrow\">\n      <img [src]=\"contact.picture\"/>\n    </div>\n  </div>\n",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ContactDetailComponent);
    return ContactDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contacts/contact-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListComponent; });
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
 * This component renders a list of contacts.
 *
 * At the top is a "new contact" button.
 * Each list item is a clickable link to the `contacts.contact` details substate
 */
var ContactListComponent = /** @class */ (function () {
    function ContactListComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContactListComponent.prototype, "contacts", void 0);
    ContactListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact-list',
            template: "\n  <ul class=\"selectlist list-unstyled\">\n    <li>\n      <!-- This link is a relative ui-sref to the contacts.new state. -->\n      <a uiSref=\".new\">\n        <button class=\"btn btn-primary\">\n          <i class=\"fa fa-pencil\"></i><span>New Contact</span>\n        </button>\n      </a>\n    </li>\n\n    <li>&nbsp;</li>\n\n    <!-- Highlight the selected contact:\n        When the current state matches the ui-sref's state (and its parameters)\n        ui-sref-active applies the 'selected' class to the li element -->\n    <li *ngFor=\"let contact of contacts\" >\n      <a uiSref=\".contact\" [uiParams]=\"{contactId: contact._id}\" uiSrefActive=\"selected\">\n        {{contact.name.first}} {{contact.name.last}}\n      </a>\n    </li>\n  </ul>\n",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ContactListComponent);
    return ContactListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contacts/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
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
 * This component renders details for a single contact
 *
 * A button messages the contact by linking to `mymessages.compose` state passing the email as a state parameter.
 * Another button edits the contact by linking to `contacts.contact.edit` state.
 */
var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContactComponent.prototype, "contact", void 0);
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: "\n    <div class=\"contact\">\n      <app-contact-detail [contact]=\"contact\"></app-contact-detail>\n    \n      <!-- This button has an ui-sref to the mymessages.compose state. The ui-sref provides the mymessages.compose\n           state with an non-url parameter, which is used as the initial message model -->\n      <button class=\"btn btn-primary\" uiSref=\"mymessages.compose\" [uiParams]=\"{ message: { to: contact.email } }\">\n        <i class=\"fa fa-envelope\"></i><span>Message</span>\n      </button>\n    \n      <!-- This button has a relative ui-sref to the contacts.contact.edit state. -->\n      <button class=\"btn btn-primary\" uiSref=\".edit\">\n        <i class=\"fa fa-pencil\"></i><span>Edit Contact</span>\n      </button>\n      <ui-view></ui-view>\n    </div>\n",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contacts/contacts-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_app_config_service__ = __webpack_require__("../../../../../src/app/global/app-config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_sessionStorage__ = __webpack_require__("../../../../../src/app/util/sessionStorage.ts");
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



/** A fake Contacts REST client API */
var ContactsDataService = /** @class */ (function (_super) {
    __extends(ContactsDataService, _super);
    function ContactsDataService(appConfig) {
        // http://beta.json-generator.com/api/json/get/V1g6UwwGx
        return _super.call(this, 'contacts', 'assets/contacts.json', appConfig) || this;
    }
    ContactsDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__global_app_config_service__["a" /* AppConfigService */]])
    ], ContactsDataService);
    return ContactsDataService;
}(__WEBPACK_IMPORTED_MODULE_2__util_sessionStorage__["a" /* SessionStorage */]));



/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
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
 * This component renders the contacts submodule.
 *
 * On the left is the list of contacts.
 * On the right is the ui-view viewport where contact details appear.
 */
var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContactsComponent.prototype, "contacts", void 0);
    ContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contacts',
            template: "\n    <div class=\"my-contacts flex-h\">\n    \n      <app-contact-list [contacts]=\"contacts\" class=\"flex nogrow\"></app-contact-list>\n    \n      <ui-view>\n        <!-- This default content is displayed when the ui-view is not filled in by a child state -->\n        <h4 style=\"margin: 1em 2em;\">Select a contact</h4>\n      </ui-view>\n    </div>\n",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contacts/contacts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsModule", function() { return ContactsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_component__ = __webpack_require__("../../../../../src/app/contacts/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_detail_component__ = __webpack_require__("../../../../../src/app/contacts/contact-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_list_component__ = __webpack_require__("../../../../../src/app/contacts/contact-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contacts_component__ = __webpack_require__("../../../../../src/app/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_contact_component__ = __webpack_require__("../../../../../src/app/contacts/edit-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contacts_states__ = __webpack_require__("../../../../../src/app/contacts/contacts.states.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contacts_data_service__ = __webpack_require__("../../../../../src/app/contacts/contacts-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ContactsModule = /** @class */ (function () {
    function ContactsModule() {
    }
    ContactsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__uirouter_angular__["UIRouterModule"].forChild({ states: __WEBPACK_IMPORTED_MODULE_7__contacts_states__["a" /* CONTACTS_STATES */] }),
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
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
        })
    ], ContactsModule);
    return ContactsModule;
}());



/***/ }),

/***/ "../../../../../src/app/contacts/contacts.states.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAllContacts */
/* unused harmony export contactsState */
/* unused harmony export getOneContact */
/* unused harmony export viewContactState */
/* unused harmony export editContactState */
/* unused harmony export getBlankContact */
/* unused harmony export newContactState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONTACTS_STATES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contact_component__ = __webpack_require__("../../../../../src/app/contacts/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contacts_component__ = __webpack_require__("../../../../../src/app/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_contact_component__ = __webpack_require__("../../../../../src/app/contacts/edit-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contacts_data_service__ = __webpack_require__("../../../../../src/app/contacts/contacts-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__uirouter_core__ = __webpack_require__("../../../../@uirouter/core/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__uirouter_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__uirouter_core__);





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
        { token: 'contact', deps: [__WEBPACK_IMPORTED_MODULE_3__contacts_data_service__["a" /* ContactsDataService */], __WEBPACK_IMPORTED_MODULE_4__uirouter_core__["Transition"]], resolveFn: getOneContact },
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
            component: __WEBPACK_IMPORTED_MODULE_2__edit_contact_component__["a" /* EditContactComponent */],
            bindings: { pristineContact: 'contact' },
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


/***/ }),

/***/ "../../../../../src/app/contacts/edit-contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uirouter_core__ = __webpack_require__("../../../../@uirouter/core/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uirouter_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__uirouter_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_dialog_service__ = __webpack_require__("../../../../../src/app/global/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contacts_data_service__ = __webpack_require__("../../../../../src/app/contacts/contacts-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_util__ = __webpack_require__("../../../../../src/app/util/util.ts");
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
var EditContactComponent = /** @class */ (function () {
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
        // Make an editable copy of the pristineContact
        this.contact = Object(__WEBPACK_IMPORTED_MODULE_4__util_util__["a" /* copy */])(this.pristineContact);
    };
    EditContactComponent.prototype.uiCanExit = function () {
        if (this.canExit || Object(__WEBPACK_IMPORTED_MODULE_1__uirouter_core__["equals"])(this.contact, this.pristineContact)) {
            return true;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], EditContactComponent.prototype, "pristineContact", void 0);
    EditContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-contact',
            template: "\n    <div class=\"contact\">\n      <div class=\"details\">\n        <div><label>First</label><input type=\"text\" [(ngModel)]=\"contact.name.first\"></div>\n        <div><label>Last</label><input type=\"text\" [(ngModel)]=\"contact.name.last\"></div>\n        <div><label>Company</label><input type=\"text\" [(ngModel)]=\"contact.company\"></div>\n        <div><label>Age</label><input type=\"text\" [(ngModel)]=\"contact.age\"></div>\n        <div><label>Phone</label><input type=\"text\" [(ngModel)]=\"contact.phone\"></div>\n        <div><label>Email</label><input type=\"text\" [(ngModel)]=\"contact.email\"></div>\n        <div><label>Street</label><input type=\"text\" [(ngModel)]=\"contact.address.street\"></div>\n        <div><label>City</label><input type=\"text\" [(ngModel)]=\"contact.address.city\"> </div>\n        <div><label>State</label><input type=\"text\" [(ngModel)]=\"contact.address.state\"></div>\n        <div><label>Zip</label><input type=\"text\" [(ngModel)]=\"contact.address.zip\"></div>\n        <div><label>Image</label><input type=\"text\" [(ngModel)]=\"contact.picture\"></div>\n      </div>\n    \n      <hr>\n    \n      <div>\n        <!-- This button's ui-sref relatively targets the parent state, i.e., contacts.contact -->\n        <button class=\"btn btn-primary\" uiSref=\"^\"><i class=\"fa fa-close\"></i><span>Cancel</span></button>\n        <button class=\"btn btn-primary\" (click)=\"save(contact)\"><i class=\"fa fa-save\"></i><span>Save</span></button>\n        <button class=\"btn btn-primary\" (click)=\"remove(contact)\"><i class=\"fa fa-close\"></i><span>Delete</span></button>\n      </div>\n    </div>\n",
            styles: []
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])('$state$')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__uirouter_core__["StateService"],
            __WEBPACK_IMPORTED_MODULE_2__global_dialog_service__["a" /* DialogService */],
            __WEBPACK_IMPORTED_MODULE_3__contacts_data_service__["a" /* ContactsDataService */], Object, __WEBPACK_IMPORTED_MODULE_1__uirouter_core__["TransitionService"]])
    ], EditContactComponent);
    return EditContactComponent;
}());



/***/ })

});
//# sourceMappingURL=contacts.module.chunk.js.map