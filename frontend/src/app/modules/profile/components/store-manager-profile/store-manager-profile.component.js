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
exports.StoreManagerProfileComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var store_manager_profile_service_1 = require("../../services/storemanager-profile/store-manager-profile.service");
var StoreManagerProfileComponent = /** @class */ (function () {
    function StoreManagerProfileComponent(storeManagerService, router) {
        this.storeManagerService = storeManagerService;
        this.router = router;
    }
    StoreManagerProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storeManagerService.getStores().subscribe(function (stores) {
            _this.managerStores = stores;
        });
    };
    StoreManagerProfileComponent.prototype.goToStore = function (store) {
        this.router.navigate(["stores/" + store.name]);
    };
    StoreManagerProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-store-manager-profile',
            templateUrl: './store-manager-profile.component.html',
            styleUrls: ['./store-manager-profile.component.css']
        }),
        __metadata("design:paramtypes", [store_manager_profile_service_1.StoreManagerProfileService, router_1.Router])
    ], StoreManagerProfileComponent);
    return StoreManagerProfileComponent;
}());
exports.StoreManagerProfileComponent = StoreManagerProfileComponent;
