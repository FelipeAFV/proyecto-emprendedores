import { StoreCategory } from "../stores/enums/store-category";
export interface Store {
    name: string,
    category: StoreCategory,
    img_name?: string,
    description: string
}