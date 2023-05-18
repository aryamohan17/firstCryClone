import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {
  product_id:any
constructor(private ar:ActivatedRoute,private ps:ProductService,private route:Router){}
  ngOnInit():void{
    this.ar.params.subscribe((data:any)=>{
      this.product_id=data["id"]
    })
    this.ps.deleteProduct(this.product_id).subscribe((item:any)=>{
      alert("product deleted");
      this.route.navigateByUrl("products")
    })
  }
}
