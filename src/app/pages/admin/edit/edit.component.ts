import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from '../../interfaces/Product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  product!:IProduct
  form=this.formBuilder.group({
    name: ["",[Validators.required,Validators.minLength(3)]],
    image:["",[Validators.required]],
    price:[0,[Validators.required,Validators.min(1)]],
    quanlity:[0,[Validators.min(1)]],
    description:["",[Validators.required,Validators.minLength(6)]]
   })
   constructor(private productService: ProductService,private formBuilder:FormBuilder ,private router:Router,private activeRouter:ActivatedRoute){
    this.activeRouter.paramMap.subscribe(params=>{
      const id=params.get('id');
      this.productService.getOneProducts(id).subscribe({
        next:(product)=>{
        this.product=product;
        this.form.patchValue(product)
        },
        error:(err)=>{
          console.log(err);
          
        }
      })

    })
   }
   
   onHandelSubmit(){
    if(this.form.invalid) return
    this.productService.eidtProduct({id:this.product.id ,...this.form.value}).subscribe({
      next:(data)=>{
       this.router.navigate(['/admin'])
       alert("Update success");
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
   }
}
