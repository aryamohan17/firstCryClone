import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // object create for bs
  search = new BehaviorSubject("")

  constructor(private http:HttpClient) { }

  viewAllProducts(){
   return this.http.get('http://localhost:3000/products')
  }
  viewProduct(productId:any){
    return this.http.get('http://localhost:3000/products/'+productId);
  }

  deleteProduct(productId:any){
    return this.http.delete('http://localhost:3000/products/'+productId)
  }

  addNewProduct(productData:any){
    return this.http.post('http://localhost:3000/products',productData)
  }
  updateProduct(productId:any,productUpdateData:any){
    return this.http.put('http://localhost:3000/products/'+productId,productUpdateData)
  }
}
