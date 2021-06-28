import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from 'src/app/model/store';
import { environment } from 'src/environments/environment';
import { StoreCategory } from '../../enums/store-category';
import { StoreFilters } from '../../model/interfaces/store-filters';

@Injectable()
export class StoreService {

  stores: Store[] = [
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '},
    {name: 'Tienda 1', category: StoreCategory.CLOTHES, description: 'ropa camisa '}]

  constructor(private http: HttpClient) { }

  getStoreByName(storeName: string): Observable<Store> {
    return this.http.get<Store>(`${environment.ApiUrl}/stores/${storeName}`, {withCredentials: true});
    // return of({name: storeName});
  }
  
  isStoreManager(storeName: string) {
    return this.http.post(`${environment.ApiUrl}/authorization/isStoreOwner`, {storeName: storeName}, {withCredentials: true});
    
  }
  
  getStoresByFilters(storeFilters: StoreFilters) : Observable<Store[]> {
    return of(this.stores.filter( (store) => {
      return store.name.includes(storeFilters.name);
    }));
    // return this.http.post<Store[]>(`${environment.ApiUrl}/stores`, storeFilters, {withCredentials: true});

  }
  
  createStore(store: Store) {
    return this.http.post(`${environment.ApiUrl}/stores`, store, {withCredentials: true});

  }
}
