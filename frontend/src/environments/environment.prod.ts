import process from "process";
const PORT = process.env.PORT;
export const environment = {
  production: true,
  ApiUrl: 'http://localhost:'+PORT+'/api',
  AuthUrl: 'http://localhost:'+PORT
};
