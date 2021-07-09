import {Request,response,Response} from "express";
import UserService from "../services/user-service";
import ClientService from "../services/client-service";
import ProfileService from "../services/profile-service";
import StoreService from '../services/store-service';
import {User} from "../model/entity/user";
import {Profile} from "../model/entity/profile";
import {Client} from "../model/entity/client";
import {AppRole} from "../model/enums/app-role";
import bcrypt from "bcrypt";
import JWTService from "../services/token/jwt-service";
import CookieService from "../services/cookie/cookie-service";
import {AppCookie} from "model/enums/app-cookies";
import { UserPayload } from "model/interfaces/user-payload";
import { Store } from "model/entity/store";

class ClientController{
    controllertest = (req: Request,res:Response) => {
        res.send("controller responding")
    };

    async getFavoritesStores(req:Request,res:Response){
        const cookiedata = JWTService.getJwtPayloadInCookie(req);
        const client = await ClientService.getByConditions({where:{profile:cookiedata?.profileId},relations:['favorite_stores']})
        if(!client || client.favorite_stores.length === 0){
            res.status(401).json({error:"no stores found for " + cookiedata?.role})
        }else{
            res.status(200).json(client.favorite_stores)
        }
    }

    async deleteFavoriteStore(req:Request,res:Response) {
        //const storeId: number = Number.parseInt(req.params.store_id);
        //const affected = await ClientService.deleteStore(storeId);
        //res.status(200).json({message: `Rows affected ${affected}`});
    }

    async addFavoriteStore(req:Request,res:Response) {

        const {storeName} = req.body;
        
        //se busca la tienda que corresponda a el nombre del body
        const foundStore = await StoreService.getByConditions({where:{name:storeName}});

        // Revision de si existe o no la tienda buscada
        if(!foundStore) return res.status(401).json({message:"no stores found"})

        // Se busca el cliente que desea añadir alguna tienda a favoritos
        const currentClient = await ClientService.getByConditions({where:{profile:req.payload.profileId}, relations:['favorite_stores']})
        
        // Se revisa si exsite el cliente que desea añadir alguna tienda a favortios
        if(!currentClient) return res.status(401).json({message:"no client found"})

        const currentFavorites = currentClient.favorite_stores;

        const existsInFavorites = currentFavorites.find( store => store.name === foundStore.name);

        // Se revisa si el usuario ya tiene esta store añadida a favoritos
        if(existsInFavorites) return res.status(400).json({message: 'user already have this store added to favorites'})

        // Obtenemos sus stores favoritas actuales y añadimos al array la nueva store
        currentClient.favorite_stores = currentFavorites;

        currentClient.favorite_stores.push(foundStore);

        const clientCheck = await ClientService.create(currentClient)

        if(!clientCheck) return res.status(501).json({message: 'internal server error'})

        res.status(200).json(clientCheck);

    }
        


}

export default new ClientController(); 