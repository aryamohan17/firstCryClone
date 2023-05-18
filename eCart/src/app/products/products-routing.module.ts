import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductsComponent } from './products.component';
import { ViewAllProductsComponent } from "./view-all-products/view-all-products.component";
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [
  { path: '', component: ViewAllProductsComponent },
  {path:'add_product',component:AddProductsComponent},
  {path:'Edit-Product/:id',component:EditProductComponent},
  {path:'view-Product/:id',component:ViewProductsComponent},
  {path:'ViewAllProducts',component:ViewAllProductsComponent},
  {path:'delete-path/:id',component:DeleteProductComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
