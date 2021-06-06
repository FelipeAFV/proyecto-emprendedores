"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_role_1 = require("../../model/app-role");
var local_storage_service_1 = require("../../services/localstorage/local-storage.service");
var can_render_service_1 = require("../../services/can-render/can-render.service");
var profile_service_1 = require("./services/profile/profile.service");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(localStorageService, profileService, router, platformLocation, canRenderService) {
        var _this = this;
        this.localStorageService = localStorageService;
        this.profileService = profileService;
        this.router = router;
        this.platformLocation = platformLocation;
        this.canRenderService = canRenderService;
        this.STORE_MANAGER = 'emprendedor';
        this.CLIENT = 'cliente';
        this.loadProfileData();
        console.log('Profile constructor');
        this.canRenderService.allowRender();
        this.platformLocation.onPopState(function () {
            if (_this.router.url.includes('profile'))
                _this.hasProfile(_this.roleToChange);
        });
    }
    ProfileComponent.prototype.ngOnChanges = function (changes) {
        this.loadProfileData();
        // this.canRenderService.allowRender();
    };
    ProfileComponent.prototype.ngAfterContentInit = function () {
    };
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.hasProfile = function (profile) {
        var _this = this;
        console.log('Ejecutando has profile');
        this.profileService.hasProfileWithRole(profile).subscribe(function () {
            _this.profileService.changeToProfileWithRole(profile).subscribe(function (data) {
                console.log(data.message);
                _this.localStorageService.setProfile(data.profile);
                console.log('Rol Actual ', _this.localStorageService.getCurrentProfile().role);
                _this.loadProfileData();
                if (profile === app_role_1.AppRole.CLIENT) {
                    _this.canRenderService.allowRender();
                }
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log(err);
            _this.router.navigate(['profile/addStoreManager']);
        });
    };
    ProfileComponent.prototype.loadProfileData = function () {
        console.log('Ejecutando load profile data');
        var profile = this.profileService.getCurrentProfile();
        this.personName = profile.firstName + " " + profile.lastName;
        this.email = profile.email;
        switch (profile.role) {
            case app_role_1.AppRole.CLIENT:
                this.modeToChange = this.STORE_MANAGER;
                this.roleToChange = app_role_1.AppRole.STORE_MANAGER;
                this.router.navigate(['profile/client']);
                break;
            case app_role_1.AppRole.STORE_MANAGER:
                this.modeToChange = this.CLIENT;
                this.roleToChange = app_role_1.AppRole.CLIENT;
                this.router.navigate(['profile/storeManager']);
                break;
            default:
                break;
        }
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.css']
        }),
        __metadata("design:paramtypes", [local_storage_service_1.LocalStorageService, profile_service_1.ProfileService, router_1.Router, common_1.PlatformLocation, can_render_service_1.CanRenderService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
