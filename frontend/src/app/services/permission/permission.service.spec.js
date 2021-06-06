"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var permission_service_1 = require("./permission.service");
describe('PermissionService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(permission_service_1.PermissionService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
