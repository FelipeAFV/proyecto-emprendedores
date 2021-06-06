"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app_role_1 = require("../model/enums/app-role");
var client_controller_1 = __importDefault(require("../controllers/client.controller"));
var role_auth_1 = __importDefault(require("../middlewares/role-auth"));
var router = express_1.Router();
router.get("/favoriteStores", role_auth_1.default.checkRole([app_role_1.AppRole.CLIENT]), client_controller_1.default.getFavoritesStores);
router.delete('/favoritesStores/:id', role_auth_1.default.checkRole([app_role_1.AppRole.CLIENT]), client_controller_1.default.deleteFavoriteStore);
exports.default = router;
