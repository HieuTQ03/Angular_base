import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  form=this.formBuilder.group({
    email: ["",[Validators.required,Validators.email]],
    password:["",[Validators.required,Validators.minLength(6)]],
   })
   constructor(private authService: AuthService,private formBuilder:FormBuilder ,private router:Router){}
   
   onHandelSubmit(){
    if(this.form.invalid) return
    this.authService.signup(this.form.value).subscribe({
      next:(user)=>{
        alert("Signup success");
        this.router.navigate(['/signin']);
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
   }
}
