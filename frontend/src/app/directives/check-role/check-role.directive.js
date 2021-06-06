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
exports.CheckRoleDirective = void 0;
var core_1 = require("@angular/core");
var app_role_1 = require("src/app/model/app-role");
var authorization_service_1 = require("src/app/services/authorization/authorization.service");
var CheckRoleDirective = /** @class */ (function () {
    function CheckRoleDirective(templateRef, viewContainer, authorizationService) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.authorizationService = authorizationService;
        console.log('Creando directiva');
    }
    CheckRoleDirective.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.appCheckRole);
        this.authorizationService.hasRole(this.appCheckRole).subscribe(function (data) {
            _this.viewContainer.createEmbeddedView(_this.templateRef);
            console.log(data);
        }, function (err) {
            console.log(err);
            _this.viewContainer.clear();
        });
    };
    var _a, _b;
    __decorate([
        core_1.Input(),
        __metadata("design:type", typeof (_a = typeof app_role_1.AppRole !== "undefined" && app_role_1.AppRole) === "function" ? _a : Object)
    ], CheckRoleDirective.prototype, "appCheckRole", void 0);
    CheckRoleDirective = __decorate([
        core_1.Directive({
            selector: '[appCheckRole]'
        }),
        __metadata("design:paramtypes", [core_1.TemplateRef, core_1.ViewContainerRef, typeof (_b = typeof authorization_service_1.AuthorizationService !== "undefined" && authorization_service_1.AuthorizationService) === "function" ? _b : Object])
    ], CheckRoleDirective);
    return CheckRoleDirective;
}());
exports.CheckRoleDirective = CheckRoleDirective;
