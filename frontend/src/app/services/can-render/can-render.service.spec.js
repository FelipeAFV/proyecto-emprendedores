"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var can_render_service_1 = require("./can-render.service");
describe('CanRenderService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(can_render_service_1.CanRenderService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
