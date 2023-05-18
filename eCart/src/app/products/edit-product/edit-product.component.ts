import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  constructor(private ar:ActivatedRoute,private ps:ProductService){}
product_id:any
product_data:any
  ngOnInit():void{
    this.ar.params.subscribe((data:any)=>{
      this.product_id=data["id"]
    })
    this.ps.viewProduct(this.product_id).subscribe((data:any)=>{
      this.product_data=data
      console.log(this.product_data);
      
    })
  }
  updateProduct(form:any){
  
    this.ps.updateProduct(this.product_id,this.product_data).subscribe((result:any)=>{
      alert("updated")
    })
  }

}
