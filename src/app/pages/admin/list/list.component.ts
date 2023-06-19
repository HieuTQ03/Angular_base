import { Component } from '@angular/core';
import { IProduct } from '../../interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
 products!:IProduct[];
 constructor(private productService:ProductService){
  this.productService.getAllProducts().subscribe({
    next:(data)=>{
     this.products = data
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
 }

 onHandelRemove(id:any){
  const confirm=window.confirm("Are you sure you want to delete this product?");
  if(!confirm) return
   this.productService.removeProduct(id).subscribe({
    next: (data)=>{
      console.log("Delete successfully");
      this.products = this.products.filter((product)=>product.id !== id)
    },
    error: (err)=>{
      console.log(err);
      
    }
   })
 }
}
