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

  srcImageToUpload: string;

  image: File;

  defaultCategory: StoreCategory = StoreCategory.GENERAL;
  storeCategories: StoreCategory[] = getAllStoreCategories(); 
  // storeCategories: AppCategory[] = getAllStoreCategories().filter( category => category !== this.defaultCategory); 

  constructor(private storeService: StoreService, private router: Router) { 
    this.addStoreForm = new FormGroup({
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl('')
    });
  }

  getPresentableNameFromCategory(category: StoreCategory) {
    return getAppCategorySpec(category).presentableName;
  }

  ngOnInit(): void {
  }

  createStore() {
    const formData = new FormData();
    formData.append('image', this.image);
    formData.append('name', this.addStoreForm.get('name').value);
    formData.append('category', this.addStoreForm.get('category').value );
    formData.append('description', this.addStoreForm.get('description').value);
    this.storeService.createStore(formData).subscribe(
      (data) => {
        this.router.navigate(['profile/storeManager']);
      },
      (err) => {
        alert(err);
      }
    );
  }

  imageLoading(fileEvent) {
    this.srcImageToUpload = fileEvent.target.files[0];
    const reader = new FileReader();
     
    if(fileEvent.target.files && fileEvent.target.files.length) {
      const [file] = fileEvent.target.files;

      //The file is readed from the file input
      reader.readAsDataURL(file);
      this.image = file;
     
      reader.onload = () => {
        /**   After the file is readed, the url of the temporary file
        **  stored in frontent is asign to the result property of the reader
        **  object.
        */
        this.srcImageToUpload = reader.result as string;
      
        
    
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
