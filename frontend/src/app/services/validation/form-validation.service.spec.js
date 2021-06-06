"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var form_validation_service_1 = require("./form-validation.service");
describe('FormValidationService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(form_validation_service_1.FormValidationService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
