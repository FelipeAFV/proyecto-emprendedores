"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var role_guard_service_1 = require("./role-guard.service");
describe('RoleGuardService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(role_guard_service_1.RoleGuardService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
