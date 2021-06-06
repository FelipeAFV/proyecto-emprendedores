"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var local_storage_service_1 = require("./local-storage.service");
describe('LocalStorageService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(local_storage_service_1.LocalStorageService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
