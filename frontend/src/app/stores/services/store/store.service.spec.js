"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var store_service_1 = require("./store.service");
describe('StoreService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(store_service_1.StoreService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
