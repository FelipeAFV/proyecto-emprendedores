import { json, Request, Response, Router } from "express";
import { Store } from "model/entity/store";
import { StoreCategory } from "../model/enums/store-category";
import { AppRole } from "../model/enums/app-role";
import storemanagerService from "../services/storemanager-service";
import jwtService from "../services/token/jwt-service";
import storeService from "../services/store-service";
import productService from "../services/product-service";
import {fromStringToCategory} from "../utils/store-utils";
import { Product } from "../model/entity/product";

class StoreController {

    async getStoreByName(req: Request, res: Response) {
        const storeName = req.params.storeName;
        const store = await storeService.getByName(storeName);
        console.log(store);
        if (!store) return res.status(200).json({message: 'No store found'});
        res.status(200).json(store);
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
        const newStore = await storeService.create({id: 0, name: name, description: description, category: category as StoreCategory , managers: [currentManager], products : []});
        
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
}

export default new StoreController();