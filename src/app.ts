
import express, { Request, Response, urlencoded, json } from "express";
import dotenv from "dotenv";
import "./create-database";
import cors from "cors";
import path from "path";
import helmet from "helmet";
import {router as authController } from "./routes/auth";
import cookieParser from "cookie-parser";
const app = express();
const PORT = process.env.PORT || 3000;
import JWTService from "./services/token/jwt-service";
import { AppRole } from "./model/enums/app-role";
import payload_check from "./middlewares/payload_checker"
import roleAuth from "./middlewares/role-auth";
import { Client } from "./model/entity/client";
import clientRoutes from './routes/client.route';
import storeRoutes from "./routes/store.routes";
import profileRoutes from "./routes/profile.routes";
import authorizationRoutes from "./routes/authorization.routes";
import storeManagerRoutes from "./routes/storeManager.routes";
import multer from 'multer';
import fs from 'fs';
const storage = multer.diskStorage({
    destination: path.join(__dirname + '/public/images'),
    filename: (req:Request, file, cb) => {
        fs.exists(path.join(__dirname + '/public/images/' + file.originalname), function(exists) {
            console.log(req.body);
            
            if (exists) {
                file.originalname = Date.now() + '.' + file.originalname;
            }
            cb(null, file.originalname)
        });
    }
})

const upload = multer({storage})

//global middleware
/**Middleware for cors policy*/
app.use(cors({
    credentials: true,
    origin: 'http://localhost:4200'
}));
dotenv.config();
// app.use(helmet());

app.use(cookieParser());
app.use(json());
app.use(express.urlencoded())
//app.use(multer({storage: storage}).single('image'))
app.use(express.static(path.join(process.cwd(), '/frontend/dist/proyecto-emprendedores-frontend/')));
app.use('/cookie', async (req, res , next) => {
    JWTService.setJwtInCookie({role: AppRole.CLIENT}, res);
    res.send('Cookie set')
})


app.post('/pruebas', upload.single('image'),(req:Request, res: Response) => {
    
    if(!req.file){
        res.status(500).json({message: 'no image send to upload'})
    }else{
        fs.mkdir(__dirname + '/public/images/'+req.body.nombre, {recursive: true},(err) => {
        console.log(err);
        });
        fs.rename(__dirname + '/public/images/' + req.file.originalname, __dirname + '/public/images/'+req.body.nombre + '/' + req.file.originalname, function (err) {
            if (err) throw err
            console.log('Successfully moved')
          })
        res.status(200).json({message: 'image upload succesfully'})
    }
    
})

/**Authentication and Authorization routes */
app.use("/",authController);


/**Authentication protected route : only logged users can access */
app.use('/api', payload_check);
app.use('/api/authorization', authorizationRoutes);
app.use('/api/client', clientRoutes);
app.use('/api/stores', storeRoutes);
app.use('/api/profiles', profileRoutes );
app.use('/api/storeManager', storeManagerRoutes );
/**Authorization protected route : only users with certain roles can access */
app.use('/api/adminRoute', roleAuth.checkRole([AppRole.ADMIN, AppRole.CLIENT]), (req: Request, res: Response) => {
    res.status(200).json({message: 'Admin data'});
} )
//app.use('/verifycookie',payload_check,(req,res) => res.send(req.payload)) async (req, res , next) => {
    // const payload = JWTService.getJwtPayloadInCookie(req);
    // if (!payload) {
    //     console.log('Token Not provided or expired');
    //     res.send('Token Not provided or expired');
    // }
    // res.send(payload);
     
//})
console.log(process.env.NODE_ENV);
app.get("*", (req,res) => res.sendFile(path.join(process.cwd(),'/frontend/dist/proyecto-emprendedores-frontend/index.html')));

app.listen(PORT,() => console.log("server running on port", PORT))


 