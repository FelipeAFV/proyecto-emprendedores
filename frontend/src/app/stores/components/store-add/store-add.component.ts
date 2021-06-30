import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreCategory, getAllStoreCategories,getAppCategorySpec} from '../../enums/store-category';
import { StoreService } from '../../services/store/store.service';

@Component({
  selector: 'app-store-add',
  templateUrl: './store-add.component.html',
  styleUrls: ['./store-add.component.css']
})
export class StoreAddComponent implements OnInit {

  addStoreForm: FormGroup;

  imageToUpload: string;

  defaultCategory: StoreCategory = StoreCategory.GENERAL;
  storeCategories: StoreCategory[] = getAllStoreCategories(); 
  // storeCategories: AppCategory[] = getAllStoreCategories().filter( category => category !== this.defaultCategory); 

  constructor(private storeService: StoreService, private router: Router) { 
    this.addStoreForm = new FormGroup({
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  getPresentableNameFromCategory(category: StoreCategory) {
    return getAppCategorySpec(category).presentableName;
  }

  ngOnInit(): void {
  }

  createStore() {
    this.storeService.createStore(this.addStoreForm.value).subscribe(
      (data) => {
        this.router.navigate(['profile/storeManager']);
      },
      (err) => {
        alert(err);
      }
    );
  }

  imageLoading(fileEvent) {
    this.imageToUpload = fileEvent.target.files[0];
    const reader = new FileReader();
     
    if(fileEvent.target.files && fileEvent.target.files.length) {
      const [file] = fileEvent.target.files;
      reader.readAsDataURL(file);
     
      reader.onload = () => {
    
        this.imageToUpload = reader.result as string;
      
        
    
      };
    
    }
    // this.storeService.uploadStoreImage(this.imageToUpload).subscribe(
    //   (data) => {
    //     console.log('Upload success');
    //   }, 
    //   (err) => {
    //     console.log('Upload failed');
        
    //   }
    // );
  }


}
