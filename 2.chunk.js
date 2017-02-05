webpackJsonp([2,7],{

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prefs_component__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prefs_states__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ui_router_ng2__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(439);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefsModule", function() { return PrefsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PrefsModule = (function () {
    function PrefsModule() {
    }
    PrefsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_ui_router_ng2__["UIRouterModule"].forChild({ states: [__WEBPACK_IMPORTED_MODULE_3__prefs_states__["a" /* prefsState */]] }),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__prefs_component__["a" /* PrefsComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PrefsModule);
    return PrefsModule;
}());
//# sourceMappingURL=/Users/christhielen/projects/sample-app-ng2/src/prefs.module.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_app_config_service__ = __webpack_require__(120);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrefsComponent; });
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
var PrefsComponent = (function () {
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
            selector: 'app-prefs',
            template: "\n    <div>\n      <button class=\"btn btn-primary\" (click)=\"reset()\"><i class=\"fa fa-recycle\"></i> <span>Reset All Data</span></button>\n    </div>\n    \n    <div>\n      <label for=\"restDelay\">Simulated REST API delay (ms)</label>\n      <input type=\"text\" name=\"restDelay\" [(ngModel)]=\"prefs.restDelay\">\n      <button class=\"btn btn-primary\" (click)=\"savePrefs()\">Save</button>\n    </div>\n",
            styles: []
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__global_app_config_service__["a" /* AppConfigService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__global_app_config_service__["a" /* AppConfigService */]) === 'function' && _a) || Object])
    ], PrefsComponent);
    return PrefsComponent;
    var _a;
}());
//# sourceMappingURL=/Users/christhielen/projects/sample-app-ng2/src/prefs.component.js.map

/***/ }),

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__prefs_component__ = __webpack_require__(799);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return prefsState; });

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
//# sourceMappingURL=/Users/christhielen/projects/sample-app-ng2/src/prefs.states.js.map

/***/ })

});
//# sourceMappingURL=2.bundle.map