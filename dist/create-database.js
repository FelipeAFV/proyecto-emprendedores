"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typeorm_1 = require("typeorm");
if (process.env.NODE_ENV == 'production') {
    console.log('kusdkfjhsdkjfhksjdhfkj');
    typeorm_1.createConnection({
        name: "default",
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "",
        database: "proyecto_emprendedores",
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
