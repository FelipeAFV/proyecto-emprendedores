import { StoreManagerProfileComponent } from "../modules/profile/components/store-manager-profile/store-manager-profile.component";
import { StoreCategory } from "../stores/enums/store-category";
import { Comment } from "../stores/model/interfaces/comment";
import { StoreManager } from "./store-manager";
export interface Store {
    name: string,
    category: StoreCategory,
    comments: Comment[],
    managers: StoreManager,
    img_name?: string,
    description: string
}