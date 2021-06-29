import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from 'src/app/model/store';
import { getAllStoreCategories, StoreCategory, getPresentableNameFromCategory  } from '../../enums/store-category';
import { StoreFilters } from '../../model/interfaces/store-filters';
import { StoreService } from '../../services/store/store.service';

@Component({
  selector: 'app-store-search',
  templateUrl: './store-search.component.html',
  styleUrls: ['./store-search.component.css']
})
export class StoreSearchComponent implements OnInit {

  storeSearchForm: FormGroup;

  p: number = 1;

  stores: Store[];

  defaultCategory: StoreCategory;
  storeCategories: StoreCategory[]; 

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.defaultCategory = StoreCategory.GENERAL;
    this.storeCategories = getAllStoreCategories(); 
    this.storeSearchForm = new FormGroup({
      name: new FormControl(''),
      category: new FormControl(StoreCategory.GENERAL)
    });
  }

  formatStoreName(category: StoreCategory) {
    return getPresentableNameFromCategory(category);
  }

  search() {
    this.storeService.getStoresByFilters(this.storeSearchForm.value).subscribe(data => this.stores = data.message);
  }
}
