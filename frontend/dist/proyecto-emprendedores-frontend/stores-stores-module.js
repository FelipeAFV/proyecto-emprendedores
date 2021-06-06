(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stores-stores-module"],{

/***/ "/MXA":
/*!************************************************!*\
  !*** ./src/app/stores/enums/store-category.ts ***!
  \************************************************/
/*! exports provided: StoreCategory, getAppCategorySpec, getAllStoreCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreCategory", function() { return StoreCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppCategorySpec", function() { return getAppCategorySpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllStoreCategories", function() { return getAllStoreCategories; });
var StoreCategory;
(function (StoreCategory) {
    StoreCategory["CLOTHES"] = "CLOTHES";
    StoreCategory["HOME"] = "HOME";
    StoreCategory["GENERAL"] = "GENERAL";
    StoreCategory["ELECTRONICS"] = "ELECTRONICS";
    StoreCategory["TOYS"] = "TOYS";
})(StoreCategory || (StoreCategory = {}));
function getAppCategorySpec(category) {
    switch (category) {
        case StoreCategory.CLOTHES:
            return { value: StoreCategory.CLOTHES, presentableName: 'Vestimenta' };
            break;
        case StoreCategory.ELECTRONICS:
            return { value: StoreCategory.ELECTRONICS, presentableName: 'Electronica' };
            break;
        case StoreCategory.GENERAL:
            return { value: StoreCategory.GENERAL, presentableName: 'General' };
            break;
        case StoreCategory.HOME:
            return { value: StoreCategory.HOME, presentableName: 'Hogar' };
            break;
        case StoreCategory.TOYS:
            return { value: StoreCategory.TOYS, presentableName: 'Jugueteria' };
            break;
    }
}
function getAllStoreCategories() {
    return [StoreCategory.CLOTHES, StoreCategory.HOME, StoreCategory.GENERAL, StoreCategory.ELECTRONICS, StoreCategory.TOYS];
}


/***/ }),

/***/ "4cfT":
/*!********************************************************************!*\
  !*** ./src/app/stores/components/store-add/store-add.component.ts ***!
  \********************************************************************/
/*! exports provided: StoreAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreAddComponent", function() { return StoreAddComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _enums_store_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/store-category */ "/MXA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_store_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/store/store.service */ "fFTk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function StoreAddComponent_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", category_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selected", category_r1 == ctx_r0.defaultCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.getPresentableNameFromCategory(category_r1));
} }
class StoreAddComponent {
    // storeCategories: AppCategory[] = getAllStoreCategories().filter( category => category !== this.defaultCategory); 
    constructor(storeService, router) {
        this.storeService = storeService;
        this.router = router;
        this.defaultCategory = _enums_store_category__WEBPACK_IMPORTED_MODULE_1__["StoreCategory"].GENERAL;
        this.storeCategories = Object(_enums_store_category__WEBPACK_IMPORTED_MODULE_1__["getAllStoreCategories"])();
        this.addStoreForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
    }
    getPresentableNameFromCategory(category) {
        return Object(_enums_store_category__WEBPACK_IMPORTED_MODULE_1__["getAppCategorySpec"])(category).presentableName;
    }
    ngOnInit() {
    }
    createStore() {
        this.storeService.createStore(this.addStoreForm.value).subscribe((data) => {
            this.router.navigate(['profile/storeManager']);
        }, (err) => {
            alert(err);
        });
    }
}
StoreAddComponent.ɵfac = function StoreAddComponent_Factory(t) { return new (t || StoreAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
StoreAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: StoreAddComponent, selectors: [["app-store-add"]], decls: 20, vars: 2, consts: [[1, "my-container", "w-25", "container", "my-5"], [3, "formGroup", "ngSubmit"], [1, "my-3"], ["for", "name", 1, "form-label"], ["formControlName", "name", "type", "text", "id", "name", 1, "form-control"], [1, "mb-3"], ["for", "category", 1, "form-label"], ["formControlName", "category", "id", "category", 1, "form-control"], [3, "selected", "value", 4, "ngFor", "ngForOf"], ["for", "description", 1, "form-label"], ["formControlName", "description", "id", "description", 1, "form-control"], ["type", "submit", 1, "my-button"], [3, "selected", "value"]], template: function StoreAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Creaci\u00F3n de tienda");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function StoreAddComponent_Template_form_ngSubmit_3_listener() { return ctx.createStore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Nombre de tienda");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Categoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, StoreAddComponent_option_12_Template, 2, 3, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Crear");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.addStoreForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.storeCategories);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"]], styles: [".my-container[_ngcontent-%COMP%] {\r\n    min-width: 400px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-size: 2em;\r\n    text-align: center;\r\n    margin: 10px 0;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLWFkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixjQUFjOztBQUVsQiIsImZpbGUiOiJzdG9yZS1hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1jb250YWluZXIge1xyXG4gICAgbWluLXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIFxyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "PhgV":
/*!*************************************************!*\
  !*** ./src/app/stores/stores-routing.module.ts ***!
  \*************************************************/
/*! exports provided: StoresRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresRoutingModule", function() { return StoresRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_store_add_store_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/store-add/store-add.component */ "4cfT");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/store.component */ "qpbE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: 'create', component: _components_store_add_store_add_component__WEBPACK_IMPORTED_MODULE_1__["StoreAddComponent"] },
    { path: ':storeName', component: _store_store_component__WEBPACK_IMPORTED_MODULE_2__["StoreComponent"] }
];
class StoresRoutingModule {
}
StoresRoutingModule.ɵfac = function StoresRoutingModule_Factory(t) { return new (t || StoresRoutingModule)(); };
StoresRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: StoresRoutingModule });
StoresRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](StoresRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "oRfM":
/*!*****************************************!*\
  !*** ./src/app/stores/stores.module.ts ***!
  \*****************************************/
/*! exports provided: StoresModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresModule", function() { return StoresModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/store.component */ "qpbE");
/* harmony import */ var _stores_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stores-routing.module */ "PhgV");
/* harmony import */ var _services_store_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/store/store.service */ "fFTk");
/* harmony import */ var _modules_directives_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/directives/directives.module */ "5a7I");
/* harmony import */ var _components_store_add_store_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/store-add/store-add.component */ "4cfT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class StoresModule {
}
StoresModule.ɵfac = function StoresModule_Factory(t) { return new (t || StoresModule)(); };
StoresModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: StoresModule });
StoresModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        _services_store_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _stores_routing_module__WEBPACK_IMPORTED_MODULE_2__["StoresRoutingModule"],
            _modules_directives_directives_module__WEBPACK_IMPORTED_MODULE_4__["DirectivesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](StoresModule, { declarations: [_store_store_component__WEBPACK_IMPORTED_MODULE_1__["StoreComponent"],
        _components_store_add_store_add_component__WEBPACK_IMPORTED_MODULE_5__["StoreAddComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _stores_routing_module__WEBPACK_IMPORTED_MODULE_2__["StoresRoutingModule"],
        _modules_directives_directives_module__WEBPACK_IMPORTED_MODULE_4__["DirectivesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "qpbE":
/*!*************************************************!*\
  !*** ./src/app/stores/store/store.component.ts ***!
  \*************************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_store_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/store/store.service */ "fFTk");




function StoreComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Administrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class StoreComponent {
    constructor(activatedRoute, router, location, storeService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.storeService = storeService;
        // this.store = <Store> this.location.getState();
    }
    ngOnInit() {
        console.log('Store', this.store);
        this.activatedRoute.params.subscribe((params) => {
            console.log('Param id', params.id);
            this.storeService.isStoreManager(params.storeName).subscribe((data) => {
                this.isStoreManagerViewing = true;
            }, (error) => {
                this.isStoreManagerViewing = false;
            });
            this.storeService.getStoreByName(params.storeName).subscribe((data) => {
                this.store = data;
                console.log('Store', this.store);
            });
        });
        console.log('Store', this.store);
        // console.log(this.router.getCurrentNavigation().extras.state);
        // console.log(this.store);
        // this.activatedRoute.data.subscribe( (data) => {
        //   console.log(data);
        // });
    }
}
StoreComponent.ɵfac = function StoreComponent_Factory(t) { return new (t || StoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"])); };
StoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoreComponent, selectors: [["app-store"]], decls: 7, vars: 2, consts: [[1, "main-container"], [1, "subcontainer"], ["id", "store-name"], [4, "ngIf"], [1, "my-float-button", "my-button"]], template: function StoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Bienvenidos a la tienda ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StoreComponent_div_6_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.store.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isStoreManagerViewing);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["h1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.subcontainer[_ngcontent-%COMP%] {\r\n    margin: 1em;\r\n    padding: 0.5em;\r\n}\r\n\r\n#store-name[_ngcontent-%COMP%] {\r\n    font-style: italic;\r\n}\r\n\r\n.my-float-button[_ngcontent-%COMP%] {\r\n    border: solid black 1px;\r\n    font-size: 14px;\r\n    padding: 0.7em;\r\n    border-radius: 2em;\r\n    font-weight: 400;\r\n    box-shadow: none;\r\n    position: fixed;\r\n    \r\n    bottom: 2rem;\r\n    right: 1rem;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFdBQVc7O0FBRWYiLCJmaWxlIjoic3RvcmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnN1YmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG59XHJcblxyXG4jc3RvcmUtbmFtZSB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5teS1mbG9hdC1idXR0b24ge1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAwLjdlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLyogZm9udC13ZWlnaHQ6IDUwMDsgKi9cclxuICAgIGJvdHRvbTogMnJlbTtcclxuICAgIHJpZ2h0OiAxcmVtO1xyXG5cclxufVxyXG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=stores-stores-module.js.map