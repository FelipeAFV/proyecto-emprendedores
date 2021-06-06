"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_guard_service_1 = require("../../services/guards/auth/auth-guard.service");
var client_profile_component_1 = require("./components/client-profile/client-profile.component");
var profile_add_component_1 = require("./components/profile-add/profile-add.component");
var profile_edit_component_1 = require("./components/profile-edit/profile-edit.component");
var store_manager_profile_component_1 = require("./components/store-manager-profile/store-manager-profile.component");
var profile_component_1 = require("./profile.component");
var routes = [
    { path: '', component: profile_component_1.ProfileComponent, canActivate: [auth_guard_service_1.AuthGuardService],
        children: [
            {
                path: 'storeManager',
                component: store_manager_profile_component_1.StoreManagerProfileComponent
            },
            {
                path: 'client',
                component: client_profile_component_1.ClientProfileComponent
            }
        ] },
    { path: 'edit', component: profile_edit_component_1.ProfileEditComponent },
    { path: 'addStoreManager', component: profile_add_component_1.ProfileAddComponent, data: { isStoreManagerRequest: true } }
];
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());
exports.ProfileRoutingModule = ProfileRoutingModule;
