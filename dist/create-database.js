"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typeorm_1 = require("typeorm");
if (process.env.NODE_ENV == 'production') {
    typeorm_1.createConnection({
        name: "default",
        type: "mysql",
        host: "us-cdbr-east-04.cleardb.com",
        port: 3306,
        username: "b99dd3eec8265c",
        password: "97895f4a",
        database: "heroku_7284c192195208d",
        synchronize: true,
        entities: ["dist/model/entity/*.js"]
    }).then(function () {
        console.log('Connection to database in production successful');
    }).catch(function (err) {
        console.log('Connection error');
        console.log(err);
    });
}
else {
    typeorm_1.createConnection().then(function () {
        console.log('Connection to database successful');
    }).catch(function (err) {
        console.log('Connection error');
        console.log(err);
    });
}
