"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoresModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var store_component_1 = require("./store/store.component");
var stores_routing_module_1 = require("./stores-routing.module");
var store_service_1 = require("./services/store/store.service");
var directives_module_1 = require("../modules/directives/directives.module");
var store_add_component_1 = require("./components/store-add/store-add.component");
var forms_1 = require("@angular/forms");
var StoresModule = /** @class */ (function () {
    function StoresModule() {
    }
    StoresModule = __decorate([
        core_1.NgModule({
            declarations: [
                store_component_1.StoreComponent,
                store_add_component_1.StoreAddComponent
            ],
            imports: [
                common_1.CommonModule,
                stores_routing_module_1.StoresRoutingModule,
                directives_module_1.DirectivesModule,
                forms_1.ReactiveFormsModule
            ],
            providers: [
                store_service_1.StoreService
            ]
        })
    ], StoresModule);
    return StoresModule;
}());
exports.StoresModule = StoresModule;
