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
exports.ClientProfileComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var local_storage_service_1 = require("src/app/services/localstorage/local-storage.service");
var can_render_service_1 = require("../../../../services/can-render/can-render.service");
var client_profile_service_1 = require("../../services/client-profile/client-profile.service");
var ClientProfileComponent = /** @class */ (function () {
    function ClientProfileComponent(router, clientProfileService, canRenderService, localStorageService) {
        this.router = router;
        this.clientProfileService = clientProfileService;
        this.canRenderService = canRenderService;
        this.localStorageService = localStorageService;
        console.log('Client profile constructor');
    }
    ClientProfileComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.storesSubscription.unsubscribe();
    };
    ClientProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.canRenderService.isReadyToRender().subscribe(function (data) {
            console.log('Suscribiendose a canRenderService');
            _this.storesSubscription = _this.clientProfileService.getFavoriteStores().subscribe(function (data) {
                console.log(data);
                _this.favoriteStores = data;
            }, function (err) {
                console.log('Error', err);
            });
        });
    };
    ClientProfileComponent.prototype.goToStore = function (store) {
        console.log(store);
        this.router.navigate(["stores/" + store.name], { state: store });
    };
    var _a;
    ClientProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-client-profile',
            templateUrl: './client-profile.component.html',
            styleUrls: ['./client-profile.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, client_profile_service_1.ClientProfileService, can_render_service_1.CanRenderService, typeof (_a = typeof local_storage_service_1.LocalStorageService !== "undefined" && local_storage_service_1.LocalStorageService) === "function" ? _a : Object])
    ], ClientProfileComponent);
    return ClientProfileComponent;
}());
exports.ClientProfileComponent = ClientProfileComponent;
