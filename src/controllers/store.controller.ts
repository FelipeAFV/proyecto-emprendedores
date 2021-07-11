import { json, Request, Response, Router } from "express";
import { Store } from "model/entity/store";
import { StoreCategory } from "../model/enums/store-category";
import { AppRole } from "../model/enums/app-role";
import storemanagerService from "../services/storemanager-service";
import jwtService from "../services/token/jwt-service";
import storeService from "../services/store-service";
import commentservice from "../services/comment-service";
import profileService from "../services/profile-service";
import productService from "../services/product-service";
import {fromStringToCategory} from "../utils/store-utils";
import { Product } from "../model/entity/product";
import fs from 'fs';
import FileService from '../services/fileadmin-service';
import fileadminService from "../services/fileadmin-service";
import path from 'path';
class StoreController {

    async getStoreByName(req: Request, res: Response) {
        const storeName = req.params.storeName;
        
        // Obtenemos y checkemos si existe alguna tienda bajo el nombre entregado
        // const store = await storeService.getByConditions({where: {name: storeName}, relations: ['comments','comments.user']});
        //console.log(store);

        const storeRepo = await storeService.getRepo();
        const results = await storeRepo.createQueryBuilder('store')
            .leftJoinAndSelect('store.managers', 'manager')
            .leftJoinAndSelect('manager.profile', 'profile')
            .leftJoinAndSelect('store.comments', 'comment')
            .where('store.name = :storeName', { storeName: storeName }).getOne();
        console.log(results);
        if (!results) return res.status(200).json({message: 'No store found'});

        // Se devuelve la tienda encontrada
        res.status(200).json(results);
    }

    async createStore(req: Request, res: Response){
        //Obtenemos informacion del request
        const {name, description, category} = req.body;
        const parsedCaregory = fromStringToCategory(category);

        //Se revisa si ya existe una tienda creada con el mismo nombre
        const foundStore = await storeService.getByName(name);
        if(foundStore) return res.status(500).json({message: "store name already in use"})

         //Obtenemos informacion de la cookie
        const cookieData = jwtService.getJwtPayloadInCookie(req);
        if(cookieData?.role !== AppRole.STORE_MANAGER) return res.status(500).json({message:"User dont have permissions to create new stores"});

        //Obtenemos el manager que esta haciendo la solicitud
        const currentManager = await storemanagerService.getByConditions({where:{profile:cookieData?.profileId}})
        if(!currentManager) return res.status(500).json({message: "no manager found"})

        //Creamos la store y respondemos
        const newStore = await storeService.create({id: 0, name: name, description: description, category: category as StoreCategory , managers: [currentManager], products : [], comments: []});
        
        res.status(200).json({message:"store created succesfully"});

    }

    async createStore2(req: Request, res: Response){
        //Obtenemos informacion del request
        const {name, description, category} = req.body;
        const parsedCaregory = fromStringToCategory(category);

        //Se revisa si ya existe una tienda creada con el mismo nombre
        const foundStore = await storeService.getByName(name);
        if(foundStore) return res.status(500).json({message: "store name already in use"})

         //Obtenemos informacion de la cookie
        const cookieData = jwtService.getJwtPayloadInCookie(req);
        if(cookieData?.role !== AppRole.STORE_MANAGER) return res.status(500).json({message:"User dont have permissions to create new stores"});

        //Obtenemos el manager que esta haciendo la solicitud
        const currentManager = await storemanagerService.getByConditions({where:{profile:cookieData?.profileId}})
        if(!currentManager) return res.status(500).json({message: "no manager found"})

        //Se crea la nueva carpeta contenedora de imagenes de la tienda y se mueve el archivo recibido a dicha carpeta
        fileadminService.moveNewFile(__dirname + '/../public/images/' + req.file?.originalname,__dirname + '/../public/images/'+name + '/' + req.file?.originalname)


        //Creamos la store y respondemos
        const newStore = await storeService.create({id: 0, name: name, description: description, category: category as StoreCategory , managers: [currentManager], products : [], img_name:req.file?.originalname, comments: []});
        
        res.status(200).json({message:"store created succesfully"});

    }
    
    async searchProduct(req: Request, res: Response){
        const category = req.query.category;
        const productName = req.query.product;
        const storeRepo = await productService.getRepo();
        const results = await storeRepo.createQueryBuilder('product').leftJoinAndSelect('product.store', 'store').where('product.name like :name', {name: '%' + productName + '%'}).andWhere('store.category = :category', {category: category}).execute();
        if(results.length === 0){
            res.status(500).json({message: "no matching items found"})
        }else{
            res.status(200).json({message: results});
        }
        

    }

    async searchStore(req: Request, res: Response){
        const category = req.query.category;
        const storeName = req.query.store;
        const storeRepo = await storeService.getRepo();
        const results = await storeRepo.createQueryBuilder('store').where('store.name like :name', {name: '%' + storeName + '%'}).andWhere('store.category = :category', {category: category}).getMany();
        if(results.length === 0){
            res.status(500).json({message: "no matching stores found"})
        }else{
            res.status(200).json({message: results});
        }
        

    }

    serveImage(req: Request, res: Response){
        const {storeName, imgId} = req.params;
        console.log('Store name', storeName);
        fs.exists(__dirname + '/../public/images/' + storeName + '/' + imgId, (exists) => {
            if(!exists) return res.sendStatus(500);

            res.status(200).sendFile(path.resolve(__dirname + '/../public/images/' + storeName + '/' + imgId));
        })

        
    }


    async publishComment(req: Request, res: Response){

        const {content} = req.body;
        const storeName = req.params.storeName;

        // Se revisa si la cookie esta seteada de manera correcta
        if(!req.payload.profileId) return res.status(500).json({message: 'no cookie set'});

        //Se obtiene y checkea si el profile de la cookie existe
        const curretnUser = await profileService.getByConditions({where: {id: req.payload.profileId}, relations : ['user']});

        if(!curretnUser) return res.status(500).json({message: 'no user found'});
     
        // Obtenemos y revisamos que exista la tienda a la cual se le subira el comentario
        const store = await storeService.getByName(storeName);

        if(!store) return res.status(500).json({message: 'error store not found'})

        // Se publica y guarda el comentario a la tienda
        const service = await commentservice.create({id:0, content : content, store: store, user: curretnUser.user})

        res.status(200).json(service);

    }
    
}

export default new StoreController();