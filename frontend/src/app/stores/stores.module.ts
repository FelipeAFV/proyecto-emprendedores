import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { StoresRoutingModule } from './stores-routing.module'; 
import { StoreService } from './services/store/store.service';
import { CheckRoleDirective } from '../directives/check-role/check-role.directive';
import { DirectivesModule } from '../modules/directives/directives.module';
import { StoreAddComponent } from './components/store-add/store-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreSearchComponent } from './components/store-search/store-search.component';
import { MatTableModule } from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommentSectionComponent } from './components/comment-section/comment-section.component';



@NgModule({
  declarations: [
    StoreComponent,
    StoreAddComponent,
    StoreSearchComponent,
    CommentSectionComponent
  ],
  imports: [
    CommonModule,
    StoresRoutingModule,
    DirectivesModule,
    ReactiveFormsModule,
    MatTableModule,
    NgxPaginationModule
  ],
  providers: [
    StoreService
  ]
}) 
export class StoresModule { }
