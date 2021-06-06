import "reflect-metadata";
import { createConnection } from "typeorm";


if (process.env.NODE_ENV == 'production') {
    createConnection(
        {
            name: "default",
            type: "mysql",
            host: "us-cdbr-east-04.cleardb.com",
            port: 3306,
            username: "b99dd3eec8265c",
            password: "97895f4a",
            database: "heroku_7284c192195208d",
            synchronize: true,
            entities: ["dist/model/entity/*.js"]
         }
    ).then(() => {
        console.log('Connection to database in production successful')
    }).catch((err) => {
        console.log('Connection error');
    console.log(err);
    });

} else {
    
    createConnection().then(() => {
        console.log('Connection to database successful')
    }).catch((err) => {
        console.log('Connection error');
    console.log(err);
    });
}