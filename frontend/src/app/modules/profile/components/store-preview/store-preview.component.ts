import { Component, Input, OnInit } from '@angular/core';
import { StoreService } from 'src/app/stores/services/store/store.service';

@Component({
  selector: 'app-store-preview',
  templateUrl: './store-preview.component.html',
  styleUrls: ['./store-preview.component.css']
})
export class StorePreviewComponent implements OnInit {

  @Input()
  name: string;
  
  @Input()
  description: string;
  
  @Input()
  imageName: string;

  imageSrc;

  constructor(private storeService: StoreService) { 

  }

  ngOnInit(): void {

    this.storeService.getStoreImage(this.name, this.imageName).subscribe(
      (data) => {
        this.createImageFromBlob(data);
      }
    );
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.imageSrc = reader.result;
    }, false);
    if (image) {
       reader.readAsDataURL(image);
    }
 }

}
