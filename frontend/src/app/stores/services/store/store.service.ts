import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from 'src/app/model/store';
import { environment } from 'src/environments/environment';
import { StoreCategory } from '../../enums/store-category';
import { StoreFilters } from '../../model/interfaces/store-filters';

@Injectable()
export class StoreService {

  stores: Store[] = []

  constructor(private http: HttpClient) { }

  getStoreByName(storeName: string): Observable<Store> {
    return this.http.get<Store>(`${environment.ApiUrl}/stores/${storeName}`, {withCredentials: true});
    // return of({name: storeName});
  }
  
  isStoreManager(storeName: string) {
    return this.http.post(`${environment.ApiUrl}/authorization/isStoreOwner`, {storeName: storeName}, {withCredentials: true});
    
  }
  
  getStoresByFilters(storeFilters: StoreFilters) : Observable<any> {
    let params = new HttpParams();
    params.set('name', storeFilters.name);
    console.log('Store name ', storeFilters.name);
    // return of(this.stores.filter( (store) => {
    //   return store.name.includes(storeFilters.name);
    // }));
    return this.http.get<any>(`${environment.ApiUrl}/stores/searchStore?`, {
      params: {store : storeFilters.name, category: storeFilters.category} ,withCredentials: true});
      
    }
    
    uploadComment(content: string, storeName: string) {
    return this.http.post<any>(`${environment.ApiUrl}/stores/publishComment/${storeName}`, {content: content}, {withCredentials: true});

  }
  
  createStore(storeData: FormData) {
    return this.http.post(`${environment.ApiUrl}/stores`, storeData, {withCredentials: true});

  }

  uploadStoreImage(image: File) {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post(`${environment.AuthUrl}/pruebas`, formData, {withCredentials: true});
  }

  getStoreImage(storeName: string, storeImgName: string): Observable<Blob> {
    return this.http.get(`${environment.ApiUrl}/stores/${storeName}/${storeImgName}`, { responseType:
      'blob' ,withCredentials: true});
  }
}
