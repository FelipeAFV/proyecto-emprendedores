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
exports.StoreService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var StoreService = /** @class */ (function () {
    function StoreService(http) {
        this.http = http;
    }
    StoreService.prototype.getStoreByName = function (storeName) {
        return this.http.get(environment_1.environment.ApiUrl + "/stores/" + storeName, { withCredentials: true });
        // return of({name: storeName});
    };
    StoreService.prototype.isStoreManager = function (storeName) {
        return this.http.post(environment_1.environment.ApiUrl + "/authorization/isStoreOwner", { storeName: storeName }, { withCredentials: true });
    };
    StoreService.prototype.createStore = function (store) {
        return this.http.post(environment_1.environment.ApiUrl + "/stores", store, { withCredentials: true });
    };
    StoreService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], StoreService);
    return StoreService;
}());
exports.StoreService = StoreService;
