import { Router } from "express";
import storeController from "../controllers/store.controller";
import RoleAuth from "../middlewares/role-auth";
import { AppRole } from "../model/enums/app-role";
const router: Router = Router();

router.post('/', RoleAuth.checkRole([AppRole.ADMIN,AppRole.STORE_MANAGER]),storeController.createStore2);
router.get('/searchProduct', storeController.searchProduct);
router.get('/searchStore', storeController.searchStore);
router.get('/:storeName', storeController.getStoreByName);
router.get('/:storeName/:imgId', storeController.serveImage);



export default router;