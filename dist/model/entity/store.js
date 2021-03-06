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
exports.Store = void 0;
var typeorm_1 = require("typeorm");
var store_manager_1 = require("./store-manager");
var store_category_1 = require("../enums/store-category");
var Store = /** @class */ (function () {
    function Store() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ name: "store_id" }),
        __metadata("design:type", Number)
    ], Store.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "name" }),
        __metadata("design:type", String)
    ], Store.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ name: "description" }),
        __metadata("design:type", String)
    ], Store.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column({
            type: "enum",
            enum: store_category_1.StoreCategory,
            default: store_category_1.StoreCategory.GENERAL
        }),
        __metadata("design:type", String)
    ], Store.prototype, "category", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return store_manager_1.StoreManager; }, function (manager) { return manager.stores; }),
        __metadata("design:type", Array)
    ], Store.prototype, "managers", void 0);
    Store = __decorate([
        typeorm_1.Entity("store")
    ], Store);
    return Store;
}());
exports.Store = Store;
