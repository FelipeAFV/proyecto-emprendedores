import { StoreCategory } from "../../enums/store-category";

export interface StoreFilters {
    name?: string,
    category?: StoreCategory,
    keyWord?: string
}