import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StoreAddComponent } from "./components/store-add/store-add.component";
import { StoreSearchComponent } from "./components/store-search/store-search.component";
import { StoreComponent } from "./store/store.component";


const routes: Routes = [
    {path: 'create', component: StoreAddComponent},
    {path: 'search', component: StoreSearchComponent},
    {path: ':storeName', component: StoreComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoresRoutingModule {

}