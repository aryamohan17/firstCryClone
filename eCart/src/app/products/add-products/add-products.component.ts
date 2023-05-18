import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
constructor(private fb:FormBuilder,private ps:ProductService,private router:Router){}
addProductForm=this.fb.group({
  id:["",[Validators.required]],
  product_name:["",[Validators.required]],
  category_id:["",[Validators.required]],
  description:["",[Validators.required]],
  price:["",[Validators.required]],
  is_available:["",[Validators.required]],
  product_image:["",[Validators.required]],
  rating:["",[Validators.required]],
  review:["",[Validators.required]],
  vender_name:["",[Validators.required]],
  warrenty:["",[Validators.required]]
})
add(){
  let pdata={
    id:this.addProductForm.value.id,
    product_name:this.addProductForm.value.product_name,
    category_id:this.addProductForm.value.category_id,
    description:this.addProductForm.value.description,
    price:this.addProductForm.value.price,
    is_available:this.addProductForm.value.is_available,
    product_image:this.addProductForm.value.product_image,
    rating:this.addProductForm.value.rating,
    review:this.addProductForm.value.review,
    vender_name:this.addProductForm.value.vender_name,
    warrenty:this.addProductForm.value.warrenty
  }
  if(this.addProductForm.valid){
    this.ps.addNewProduct(pdata).subscribe((data:any)=>{
      alert("new product add")
      this.router.navigateByUrl("products")
    })
  }
  else{
    alert("please add products")
  }

}
}
