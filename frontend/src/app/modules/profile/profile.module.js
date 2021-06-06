"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var profile_routing_module_1 = require("./profile-routing.module");
var profile_component_1 = require("./profile.component");
var client_profile_component_1 = require("./components/client-profile/client-profile.component");
var profile_edit_component_1 = require("./components/profile-edit/profile-edit.component");
var store_manager_profile_component_1 = require("./components/store-manager-profile/store-manager-profile.component");
var client_profile_service_1 = require("./services/client-profile/client-profile.service");
var store_service_1 = require("../../stores/services/store/store.service");
var profile_service_1 = require("./services/profile/profile.service");
var profile_add_component_1 = require("./components/profile-add/profile-add.component");
var forms_1 = require("@angular/forms");
var store_manager_profile_service_1 = require("./services/storemanager-profile/store-manager-profile.service");
var icons_module_1 = require("../icons/icons.module");
var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        core_1.NgModule({
            declarations: [
                profile_component_1.ProfileComponent,
                client_profile_component_1.ClientProfileComponent,
                profile_edit_component_1.ProfileEditComponent,
                store_manager_profile_component_1.StoreManagerProfileComponent,
                profile_add_component_1.ProfileAddComponent
            ],
            imports: [
                common_1.CommonModule,
                profile_routing_module_1.ProfileRoutingModule,
                forms_1.ReactiveFormsModule,
                icons_module_1.IconsModule
            ],
            providers: [
                client_profile_service_1.ClientProfileService,
                store_service_1.StoreService,
                profile_service_1.ProfileService,
                store_manager_profile_service_1.StoreManagerProfileService
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());
exports.ProfileModule = ProfileModule;
