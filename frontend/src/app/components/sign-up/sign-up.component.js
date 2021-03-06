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
exports.SignUpComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var auth_service_1 = require("./../../services/auth/auth.service");
var local_storage_service_1 = require("./../../services/localstorage/local-storage.service");
var form_validation_service_1 = require("./../../services/validation/form-validation.service");
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(authService, formValidationService, router, localStorageService) {
        this.authService = authService;
        this.formValidationService = formValidationService;
        this.router = router;
        this.localStorageService = localStorageService;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.signUpForm = new forms_1.FormGroup({
            firstname: new forms_1.FormControl(null, forms_1.Validators.required),
            lastname: new forms_1.FormControl(null),
            email: new forms_1.FormControl(null, [forms_1.Validators.email, forms_1.Validators.required]),
            username: new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.minLength(6)]),
            password: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(8)])
        });
        this.signUpForm.addControl('passwordConfirm', new forms_1.FormControl('', [this.formValidationService.equalControlValueValidator(this.signUpForm.get('password'))]));
        this.signUpForm.get('password').statusChanges.subscribe(function (data) {
            _this.signUpForm.get('passwordConfirm').updateValueAndValidity({ onlySelf: true });
        });
    };
    SignUpComponent.prototype.signUp = function () {
        var _this = this;
        this.signUpForm.markAllAsTouched();
        this.signUpForm.get('passwordConfirm').markAsTouched();
        if (this.signUpForm.valid) {
            this.authService.signUp(this.signUpForm.value).subscribe(function (data) {
                console.log(data);
                _this.localStorageService.setProfile(data.profile);
                _this.router.navigate(['/home']);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            console.log('Form not valid');
        }
    };
    SignUpComponent.prototype.isNotValid = function (controlName) {
        return this.formValidationService.isNotValid(controlName, this.signUpForm);
    };
    SignUpComponent.prototype.isNotValidUntouched = function (controlName) {
        return this.formValidationService.isNotValidUntouched(controlName, this.signUpForm);
    };
    SignUpComponent = __decorate([
        core_1.Component({
            selector: 'app-sign-up',
            templateUrl: './sign-up.component.html',
            styleUrls: ['./sign-up.component.css']
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, form_validation_service_1.FormValidationService, router_1.Router,
            local_storage_service_1.LocalStorageService])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;
