"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var storeManager_controller_1 = __importDefault(require("../controllers/storeManager.controller"));
var role_auth_1 = __importDefault(require("../middlewares/role-auth"));
var app_role_1 = require("../model/enums/app-role");
var router = express_1.Router();
router.get('/getMyStores', role_auth_1.default.checkRole([app_role_1.AppRole.STORE_MANAGER]), storeManager_controller_1.default.getMangerStores);
exports.default = router;
