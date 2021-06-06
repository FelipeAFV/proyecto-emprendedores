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
exports.StoreComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var store_service_1 = require("../services/store/store.service");
var StoreComponent = /** @class */ (function () {
    function StoreComponent(activatedRoute, router, location, storeService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.storeService = storeService;
        // this.store = <Store> this.location.getState();
    }
    StoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Store', this.store);
        this.activatedRoute.params.subscribe(function (params) {
            console.log('Param id', params.id);
            _this.storeService.isStoreManager(params.storeName).subscribe(function (data) {
                _this.isStoreManagerViewing = true;
            }, function (error) {
                _this.isStoreManagerViewing = false;
            });
            _this.storeService.getStoreByName(params.storeName).subscribe(function (data) {
                _this.store = data;
                console.log('Store', _this.store);
            });
        });
        console.log('Store', this.store);
        // console.log(this.router.getCurrentNavigation().extras.state);
        // console.log(this.store);
        // this.activatedRoute.data.subscribe( (data) => {
        //   console.log(data);
        // });
    };
    StoreComponent = __decorate([
        core_1.Component({
            selector: 'app-store',
            templateUrl: './store.component.html',
            styleUrls: ['./store.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, common_1.Location, store_service_1.StoreService])
    ], StoreComponent);
    return StoreComponent;
}());
exports.StoreComponent = StoreComponent;
