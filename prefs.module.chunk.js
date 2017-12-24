webpackJsonp(["prefs.module"],{

/***/ "../../../../../src/app/prefs/prefs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrefsComponent; });
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
 * A component which shows and updates app preferences
 */
var PrefsComponent = /** @class */ (function () {
    function PrefsComponent(appConfig) {
        this.appConfig = appConfig;
        this.prefs = {
            restDelay: appConfig.restDelay
        };
    }
    /** Clear out the session storage */
    PrefsComponent.prototype.reset = function () {
        sessionStorage.clear();
        document.location.reload(true);
    };
    /** After saving preferences to session storage, reload the entire application */
    PrefsComponent.prototype.savePrefs = function () {
        Object.assign(this.appConfig, { restDelay: this.prefs.restDelay }).save();
        document.location.reload(true);
    };
    PrefsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-prefs',
            template: "\n    <div>\n      <button class=\"btn btn-primary\" (click)=\"reset()\"><i class=\"fa fa-recycle\"></i> <span>Reset All Data</span></button>\n    </div>\n    \n    <div>\n      <label for=\"restDelay\">Simulated REST API delay (ms)</label>\n      <input type=\"text\" name=\"restDelay\" [(ngModel)]=\"prefs.restDelay\">\n      <button class=\"btn btn-primary\" (click)=\"savePrefs()\">Save</button>\n    </div>\n",
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__global_app_config_service__["a" /* AppConfigService */]])
    ], PrefsComponent);
    return PrefsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/prefs/prefs.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefsModule", function() { return PrefsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prefs_component__ = __webpack_require__("../../../../../src/app/prefs/prefs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prefs_states__ = __webpack_require__("../../../../../src/app/prefs/prefs.states.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PrefsModule = /** @class */ (function () {
    function PrefsModule() {
    }
    PrefsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__uirouter_angular__["UIRouterModule"].forChild({ states: [__WEBPACK_IMPORTED_MODULE_3__prefs_states__["a" /* prefsState */]] }),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__prefs_component__["a" /* PrefsComponent */]
            ]
        })
    ], PrefsModule);
    return PrefsModule;
}());



/***/ }),

/***/ "../../../../../src/app/prefs/prefs.states.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return prefsState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__prefs_component__ = __webpack_require__("../../../../../src/app/prefs/prefs.component.ts");

/**
 * This state allows the user to set their application preferences
 */
var prefsState = {
    parent: 'app',
    name: 'prefs',
    url: '/prefs',
    component: __WEBPACK_IMPORTED_MODULE_0__prefs_component__["a" /* PrefsComponent */],
    // Mark this state as requiring authentication.  See ../global/auth.hook
    data: { requiresAuth: true }
};


/***/ })

});
//# sourceMappingURL=prefs.module.chunk.js.map