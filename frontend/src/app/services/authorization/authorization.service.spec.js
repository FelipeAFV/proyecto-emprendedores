"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var authorization_service_1 = require("./authorization.service");
describe('AuthorizationService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(authorization_service_1.AuthorizationService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
