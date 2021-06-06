"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var client_profile_service_1 = require("./client-profile.service");
describe('ClientProfileService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(client_profile_service_1.ClientProfileService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
