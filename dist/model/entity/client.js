"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.Client = void 0;
var person_1 = require("../person");
var typeorm_1 = require("typeorm");
var profile_1 = require("./profile");
var store_1 = require("./store");
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ name: "client_id" }),
        __metadata("design:type", Number)
    ], Client.prototype, "id", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return profile_1.Profile; }, { cascade: true }),
        typeorm_1.JoinColumn({ name: "profile_id" }),
        __metadata("design:type", profile_1.Profile)
    ], Client.prototype, "profile", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return store_1.Store; }),
        typeorm_1.JoinTable({
            name: "client_favorite_stores",
            joinColumn: {
                name: "client_id",
                referencedColumnName: "id"
            },
            inverseJoinColumn: {
                name: "store_id",
                referencedColumnName: "id"
            }
        }),
        __metadata("design:type", Array)
    ], Client.prototype, "favorite_stores", void 0);
    Client = __decorate([
        typeorm_1.Entity("client")
    ], Client);
    return Client;
}(person_1.Person));
exports.Client = Client;
