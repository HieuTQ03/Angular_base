
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private  router: Router
  ){}
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    const user=this.authService.isAuthenticated() 
   
     if(user?.user?.id !== 1){
    
      this.router.navigate(['/signin'])
      return false  
    }
    return true 
  }
};
