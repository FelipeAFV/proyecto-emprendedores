const fs = require('fs');
const dotenv = require('dotenv');
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
fs.writeFile('./frontend/src/environments/environment.ts', enviromentConfig, (err) => {
    if (err) {
        console.log('An error has ocurred when writing to enviroment file');
        console.log(err);
    } else {
        console.log('Success on writing to enviroment file');

    }
});
fs.writeFile('./frontend/src/environments/environment.prod.ts', enviromentConfigProd, (err) => {
    if (err) {
        console.log('An error has ocurred when writing to enviroment file');
        console.log(err);
    } else {
        console.log('Success on writing to enviroment file');

    }
});
