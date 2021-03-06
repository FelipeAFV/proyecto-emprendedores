"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoresRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var store_add_component_1 = require("./components/store-add/store-add.component");
var store_component_1 = require("./store/store.component");
var routes = [
    { path: 'create', component: store_add_component_1.StoreAddComponent },
    { path: ':storeName', component: store_component_1.StoreComponent }
];
var StoresRoutingModule = /** @class */ (function () {
    function StoresRoutingModule() {
    }
    StoresRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], StoresRoutingModule);
    return StoresRoutingModule;
}());
exports.StoresRoutingModule = StoresRoutingModule;
