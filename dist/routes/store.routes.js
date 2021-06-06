"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var store_controller_1 = __importDefault(require("../controllers/store.controller"));
var role_auth_1 = __importDefault(require("../middlewares/role-auth"));
var app_role_1 = require("../model/enums/app-role");
var router = express_1.Router();
router.post('/', role_auth_1.default.checkRole([app_role_1.AppRole.ADMIN, app_role_1.AppRole.STORE_MANAGER]), store_controller_1.default.createStore);
router.get('/:storeName', store_controller_1.default.getStoreByName);
exports.default = router;
