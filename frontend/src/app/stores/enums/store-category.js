"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllStoreCategories = exports.getAppCategorySpec = exports.StoreCategory = void 0;
var StoreCategory;
(function (StoreCategory) {
    StoreCategory["CLOTHES"] = "CLOTHES";
    StoreCategory["HOME"] = "HOME";
    StoreCategory["GENERAL"] = "GENERAL";
    StoreCategory["ELECTRONICS"] = "ELECTRONICS";
    StoreCategory["TOYS"] = "TOYS";
})(StoreCategory = exports.StoreCategory || (exports.StoreCategory = {}));
function getAppCategorySpec(category) {
    switch (category) {
        case StoreCategory.CLOTHES:
            return { value: StoreCategory.CLOTHES, presentableName: 'Vestimenta' };
            break;
        case StoreCategory.ELECTRONICS:
            return { value: StoreCategory.ELECTRONICS, presentableName: 'Electronica' };
            break;
        case StoreCategory.GENERAL:
            return { value: StoreCategory.GENERAL, presentableName: 'General' };
            break;
        case StoreCategory.HOME:
            return { value: StoreCategory.HOME, presentableName: 'Hogar' };
            break;
        case StoreCategory.TOYS:
            return { value: StoreCategory.TOYS, presentableName: 'Jugueteria' };
            break;
    }
}
exports.getAppCategorySpec = getAppCategorySpec;
function getAllStoreCategories() {
    return [StoreCategory.CLOTHES, StoreCategory.HOME, StoreCategory.GENERAL, StoreCategory.ELECTRONICS, StoreCategory.TOYS];
}
exports.getAllStoreCategories = getAllStoreCategories;
