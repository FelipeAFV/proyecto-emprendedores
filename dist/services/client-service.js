"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientService = void 0;
var client_1 = require("../model/entity/client");
var generic_service_1 = require("./generic-service");
var ClientService = /** @class */ (function (_super) {
    __extends(ClientService, _super);
    function ClientService() {
        var _this = _super.call(this, client_1.Client) || this;
        _this.saveDefault = function (associatedProfile) {
            return _super.prototype.create.call(_this, { id: 0, favorite_stores: [], profile: associatedProfile });
        };
        return _this;
    }
    ClientService.prototype.getPerson = function (currentProfile) {
        return _super.prototype.getByConditions.call(this, { where: { profile: currentProfile } });
    };
    return ClientService;
}(generic_service_1.GenericService));
exports.ClientService = ClientService;
exports.default = new ClientService();
