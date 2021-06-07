import { writeFile } from "fs";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;

const enviromentConfig = `
export const environment = {
    production: false,
    ApiUrl: 'http://localhost:${PORT}/api',
    AuthUrl: 'http://localhost:${PORT}'
  };
`;
const enviromentConfigProd = `
export const environment = {
    production: true,
    ApiUrl: 'http://localhost:${PORT}/api',
    AuthUrl: 'http://localhost:${PORT}'
  };
`;
writeFile('./frontend/src/environments/environment.ts', enviromentConfig, (err) => {
    if (err) {
        console.log('An error has ocurred when writing to enviroment file');
        console.log(err);
    } else {
        console.log('Success on writing to enviroment file');

    }
});
writeFile('./frontend/src/environments/environment.prod.ts', enviromentConfigProd, (err) => {
    if (err) {
        console.log('An error has ocurred when writing to enviroment file');
        console.log(err);
    } else {
        console.log('Success on writing to enviroment file');

    }
});
