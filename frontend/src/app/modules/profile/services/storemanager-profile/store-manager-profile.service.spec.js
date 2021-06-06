"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var store_manager_profile_service_1 = require("./store-manager-profile.service");
describe('StoreManagerProfileService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(store_manager_profile_service_1.StoreManagerProfileService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
