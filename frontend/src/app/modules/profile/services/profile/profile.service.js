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
exports.ProfileService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var storage_variables_1 = require("src/app/model/storage-variables");
var environment_1 = require("src/environments/environment");
var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
    }
    ProfileService.prototype.getCurrentProfile = function () {
        return JSON.parse(localStorage.getItem(storage_variables_1.StorageVariables.CURRENT_PROFILE));
    };
    ProfileService.prototype.hasProfileWithRole = function (profile) {
        return this.http.get(environment_1.environment.ApiUrl + "/profiles/hasProfile/" + profile, { withCredentials: true });
    };
    ProfileService.prototype.changeToProfileWithRole = function (role) {
        return this.http.post(environment_1.environment.ApiUrl + "/profiles/changeProfile", { role: role }, { withCredentials: true });
    };
    ProfileService.prototype.addProfile = function (body) {
        return this.http.post(environment_1.environment.ApiUrl + "/profiles", body, { withCredentials: true });
    };
    ProfileService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ProfileService);
    return ProfileService;
}());
exports.ProfileService = ProfileService;
