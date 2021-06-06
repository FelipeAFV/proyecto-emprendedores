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
exports.StoreAddComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var store_category_1 = require("../../enums/store-category");
var store_service_1 = require("../../services/store/store.service");
var StoreAddComponent = /** @class */ (function () {
    // storeCategories: AppCategory[] = getAllStoreCategories().filter( category => category !== this.defaultCategory); 
    function StoreAddComponent(storeService, router) {
        this.storeService = storeService;
        this.router = router;
        this.defaultCategory = store_category_1.StoreCategory.GENERAL;
        this.storeCategories = store_category_1.getAllStoreCategories();
        this.addStoreForm = new forms_1.FormGroup({
            name: new forms_1.FormControl('', forms_1.Validators.required),
            category: new forms_1.FormControl('', forms_1.Validators.required),
            description: new forms_1.FormControl('', forms_1.Validators.required)
        });
    }
    StoreAddComponent.prototype.getPresentableNameFromCategory = function (category) {
        return store_category_1.getAppCategorySpec(category).presentableName;
    };
    StoreAddComponent.prototype.ngOnInit = function () {
    };
    StoreAddComponent.prototype.createStore = function () {
        var _this = this;
        this.storeService.createStore(this.addStoreForm.value).subscribe(function (data) {
            _this.router.navigate(['profile/storeManager']);
        }, function (err) {
            alert(err);
        });
    };
    StoreAddComponent = __decorate([
        core_1.Component({
            selector: 'app-store-add',
            templateUrl: './store-add.component.html',
            styleUrls: ['./store-add.component.css']
        }),
        __metadata("design:paramtypes", [store_service_1.StoreService, router_1.Router])
    ], StoreAddComponent);
    return StoreAddComponent;
}());
exports.StoreAddComponent = StoreAddComponent;
