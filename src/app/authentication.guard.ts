import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardServiceService } from './authguard-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private AuthguardService:AuthguardServiceService,private router:Router){}
  canActivate():boolean
  {
    //route: ActivatedRouteSnapshot,
    //state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.AuthguardService.gettoken()==false) {  
        this.router.navigateByUrl("/login");  
        return this.AuthguardService.gettoken();
    }  
    return this.AuthguardService.gettoken();
  }
  
}
