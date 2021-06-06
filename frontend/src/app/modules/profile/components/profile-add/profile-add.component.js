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
exports.ProfileAddComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_role_1 = require("src/app/model/app-role");
var local_storage_service_1 = require("src/app/services/localstorage/local-storage.service");
var profile_service_1 = require("../../services/profile/profile.service");
var ProfileAddComponent = /** @class */ (function () {
    function ProfileAddComponent(activatedRoute, profileService, router, localStorageService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.profileService = profileService;
        this.router = router;
        this.localStorageService = localStorageService;
        this.availableProfiles = { admin: app_role_1.AppRole.ADMIN, client: app_role_1.AppRole.CLIENT, storeManager: app_role_1.AppRole.STORE_MANAGER };
        activatedRoute.data.subscribe(function (data) {
            _this.isStoreManagerRequest = data.isStoreManagerRequest;
        });
    }
    ProfileAddComponent.prototype.ngOnInit = function () {
        var currentProfile = this.localStorageService.getCurrentProfile();
        var role = this.isStoreManagerRequest ? this.availableProfiles.storeManager : null;
        this.addProfileForm = new forms_1.FormGroup({
            role: new forms_1.FormControl(role, forms_1.Validators.required),
            email: new forms_1.FormControl(null, forms_1.Validators.required),
            lastName: new forms_1.FormControl(currentProfile.lastName, forms_1.Validators.required),
            firstName: new forms_1.FormControl(currentProfile.firstName, [forms_1.Validators.required, forms_1.Validators.email])
        });
    };
    ProfileAddComponent.prototype.createProfile = function () {
        var _this = this;
        this.profileService.addProfile(this.addProfileForm.value).subscribe(function (data) {
            _this.localStorageService.setProfile(data.profile);
            _this.router.navigate(['profile']);
            console.log(data);
        }, function (err) {
            alert(err);
            console.log(err);
        });
    };
    var _a;
    ProfileAddComponent = __decorate([
        core_1.Component({
            selector: 'app-profile-add',
            templateUrl: './profile-add.component.html',
            styleUrls: ['./profile-add.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, profile_service_1.ProfileService, router_1.Router, typeof (_a = typeof local_storage_service_1.LocalStorageService !== "undefined" && local_storage_service_1.LocalStorageService) === "function" ? _a : Object])
    ], ProfileAddComponent);
    return ProfileAddComponent;
}());
exports.ProfileAddComponent = ProfileAddComponent;
