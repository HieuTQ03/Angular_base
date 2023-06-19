import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  error!: string;
  form=this.formBuilder.group({
    email: ["",[Validators.required,Validators.email]],
    password:["",[Validators.required,Validators.minLength(6)]],
   })
   constructor(private authService: AuthService,private formBuilder:FormBuilder ,private router:Router){}
   
   onHandelSubmit(){
    if(this.form.invalid) return
    this.authService.signin(this.form.value).subscribe({
      next:(user)=>{
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['']);
      },
      error:(err)=>{
      this.error=err.error
      
       
        
      }
    })
   }
}
