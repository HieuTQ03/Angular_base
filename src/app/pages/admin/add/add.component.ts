import { Component } from '@angular/core';
import { IProduct } from '../../interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
 form=this.formBuilder.group({
  name: ["",[Validators.required,Validators.minLength(3)]],
  image:["",[Validators.required]],
  price:[0,[Validators.required,Validators.min(1)]],
  quanlity:[0,[Validators.min(1)]],
  description:["",[Validators.required,Validators.minLength(6)]]
 })
 constructor(private productService: ProductService,private formBuilder:FormBuilder ,private router:Router){}
 
 onHandelSubmit(){
  if(this.form.invalid) return
  this.productService.createProduct(this.form.value).subscribe({
    next:(data)=>{
      console.log("Add success");
      
     this.router.navigate(['/admin'])
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
 }
}
