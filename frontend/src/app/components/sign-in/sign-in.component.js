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
exports.SignInComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var auth_service_1 = require("./../../services/auth/auth.service");
var local_storage_service_1 = require("./../../services/localstorage/local-storage.service");
var form_validation_service_1 = require("./../../services/validation/form-validation.service");
var SignInComponent = /** @class */ (function () {
    function SignInComponent(authService, formValidationService, router, localStorageService) {
        this.authService = authService;
        this.formValidationService = formValidationService;
        this.router = router;
        this.localStorageService = localStorageService;
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.signInForm = new forms_1.FormGroup({
            username: new forms_1.FormControl(null, forms_1.Validators.required),
            password: new forms_1.FormControl(null, forms_1.Validators.required)
        });
    };
    SignInComponent.prototype.signIn = function () {
        var _this = this;
        this.signInForm.markAllAsTouched();
        if (this.signInForm.invalid)
            return;
        this.authService.signIn(this.signInForm.value).subscribe(function (data) {
            console.log(data);
            _this.localStorageService.setProfile(data);
            _this.router.navigate(['/home']);
        }, function (err) {
            console.log(err);
        });
    };
    SignInComponent.prototype.isNotValid = function (controlName) {
        return this.formValidationService.isNotValid(controlName, this.signInForm);
    };
    SignInComponent = __decorate([
        core_1.Component({
            selector: 'app-sign-in',
            templateUrl: './sign-in.component.html',
            styleUrls: ['./sign-in.component.css']
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, form_validation_service_1.FormValidationService, router_1.Router,
            local_storage_service_1.LocalStorageService])
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;
