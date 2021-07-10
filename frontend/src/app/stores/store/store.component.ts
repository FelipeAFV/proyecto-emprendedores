import { Location } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from 'src/app/model/store';
import { ClientProfileService } from 'src/app/modules/profile/services/client-profile/client-profile.service';
import { comments } from '../model/comments';
import { Comment } from '../model/interfaces/comment';
import { StoreService } from '../services/store/store.service';
   
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  store: Store;

  storeComments: Comment[] = comments;

  storeImage;

  isStoreManagerViewing: boolean;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private location: Location, private storeService: StoreService, private clientService: ClientProfileService) {
    // this.store = <Store> this.location.getState();
  }



  ngOnInit(): void {
    console.log('Store', this.store);

    
    this.activatedRoute.params.subscribe( (params: Params) => {
      console.log('Param id', params.storeName);
      this.storeService.isStoreManager(params.storeName).subscribe(
        (data) => {
          this.isStoreManagerViewing = true;
          console.log(data);
        },
        (error) => {
          console.log('Error ', error);
          this.isStoreManagerViewing = false;
        }
      );
      this.storeService.getStoreByName(params.storeName).subscribe(
        (data) => {
          this.store = data;
          console.log('Store', this.store);
          this.searchImage(this.store.name, this.store.img_name);
        }
        );
        
    })
    console.log('Store', this.store);
    // console.log(this.router.getCurrentNavigation().extras.state);
    
    // console.log(this.store);
    // this.activatedRoute.data.subscribe( (data) => {
    //   console.log(data);
    // });
  }

  searchImage(storeName: string, imgName: string) {
    this.storeService.getStoreImage(storeName, imgName).subscribe(
      
      (data) => {
        
        console.log('Imagen ', data);
        this.createImageFromBlob(data);
      }
    );
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.storeImage = reader.result;
    }, false);
    console.log(this.storeImage);
    if (image) {
       reader.readAsDataURL(image);
    }
 }

 addToFavorites(storeName: string) {
  this.clientService.addFavoriteStore(storeName).subscribe(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.log(error);
    }
  );
 }

}
