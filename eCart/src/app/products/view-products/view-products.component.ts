import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent {
  productId:any
  productData:any
  constructor(private ps:ProductService,private ar:ActivatedRoute){}
  ngOnInit():void{
    this.ar.params.subscribe((data:any)=>{
      this.productId=data["id"]
      console.log(this.productId);
      
      this.ps.viewProduct(this.productId).subscribe((data:any)=>{
        this.productData=data
      })      
    })
  }
}
