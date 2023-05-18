import { Component,OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent {
  productArray:any
  constructor(private ps :ProductService){}

  filterProduct:any;
  searchKey:any=""

  ngOnInit():void{
    this.ps.viewAllProducts().subscribe(data=>{
      // console.log(data);
      this.productArray=data     
    })
    this.ps.search.subscribe((value:any)=>{
      this.searchKey=value
    })
  }

  filter(category:any){
    this.filterProduct = this.productArray.filter((item:any)=>item.category_id==category||category=="")
  }

}
