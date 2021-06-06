import "reflect-metadata";
import { createConnection } from "typeorm";


if (process.env.NODE_ENV == 'production') {
    console.log('kusdkfjhsdkjfhksjdhfkj');
    createConnection(
        {
            name: "default",
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "",
            database: "proyecto_emprendedores",
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