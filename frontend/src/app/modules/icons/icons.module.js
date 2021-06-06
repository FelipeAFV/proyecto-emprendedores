"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconsModule = void 0;
var core_1 = require("@angular/core");
var icons_1 = require("ng-bootstrap-icons/icons");
var ng_bootstrap_icons_1 = require("ng-bootstrap-icons");
var icons = {
    PlusCircle: icons_1.PlusCircle
};
var IconsModule = /** @class */ (function () {
    function IconsModule() {
    }
    IconsModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [
                ng_bootstrap_icons_1.BootstrapIconsModule.pick(icons)
            ],
            exports: [
                ng_bootstrap_icons_1.BootstrapIconsModule
            ]
        })
    ], IconsModule);
    return IconsModule;
}());
exports.IconsModule = IconsModule;
