"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("./create-database");
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var auth_1 = require("./routes/auth");
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var app = express_1.default();
var PORT = process.env.PORT || 3000;
var jwt_service_1 = __importDefault(require("./services/token/jwt-service"));
var app_role_1 = require("./model/enums/app-role");
var payload_checker_1 = __importDefault(require("./middlewares/payload_checker"));
var role_auth_1 = __importDefault(require("./middlewares/role-auth"));
var client_route_1 = __importDefault(require("./routes/client.route"));
var store_routes_1 = __importDefault(require("./routes/store.routes"));
var profile_routes_1 = __importDefault(require("./routes/profile.routes"));
var authorization_routes_1 = __importDefault(require("./routes/authorization.routes"));
var storeManager_routes_1 = __importDefault(require("./routes/storeManager.routes"));
//global middleware
/**Middleware for cors policy*/
app.use(cors_1.default({
    credentials: true,
    origin: 'http://localhost:4200'
}));
// app.use(helmet());
app.use(cookie_parser_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use(express_1.default.static(path_1.default.join(process.cwd(), '/frontend/dist/proyecto-emprendedores-frontend/')));
app.use('/cookie', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        jwt_service_1.default.setJwtInCookie({ role: app_role_1.AppRole.CLIENT }, res);
        res.send('Cookie set');
        return [2 /*return*/];
    });
}); });
/**Authentication and Authorization routes */
app.use("/", auth_1.router);
/**Authentication protected route : only logged users can access */
app.use('/api', payload_checker_1.default);
app.use('/api/authorization', authorization_routes_1.default);
app.use('/api/client', client_route_1.default);
app.use('/api/stores', store_routes_1.default);
app.use('/api/profiles', profile_routes_1.default);
app.use('/api/storeManager', storeManager_routes_1.default);
/**Authorization protected route : only users with certain roles can access */
app.use('/api/adminRoute', role_auth_1.default.checkRole([app_role_1.AppRole.ADMIN, app_role_1.AppRole.CLIENT]), function (req, res) {
    res.status(200).json({ message: 'Admin data' });
});
//app.use('/verifycookie',payload_check,(req,res) => res.send(req.payload)) async (req, res , next) => {
// const payload = JWTService.getJwtPayloadInCookie(req);
// if (!payload) {
//     console.log('Token Not provided or expired');
//     res.send('Token Not provided or expired');
// }
// res.send(payload);
//})
console.log(process.cwd());
console.log(process.env.NODE_ENV);
app.get("*", function (req, res) { return res.sendFile(path_1.default.join(process.cwd(), '/frontend/dist/proyecto-emprendedores-frontend/index.html')); });
app.listen(PORT, function () { return console.log("server running..."); });
