(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "fFTk":
/*!********************************************************!*\
  !*** ./src/app/stores/services/store/store.service.ts ***!
  \********************************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class StoreService {
    constructor(http) {
        this.http = http;
    }
    getStoreByName(storeName) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ApiUrl}/stores/${storeName}`, { withCredentials: true });
        // return of({name: storeName});
    }
    isStoreManager(storeName) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ApiUrl}/authorization/isStoreOwner`, { storeName: storeName }, { withCredentials: true });
    }
    createStore(store) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ApiUrl}/stores`, store, { withCredentials: true });
    }
}
StoreService.ɵfac = function StoreService_Factory(t) { return new (t || StoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
StoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StoreService, factory: StoreService.ɵfac });


/***/ })

}]);
//# sourceMappingURL=common.js.map