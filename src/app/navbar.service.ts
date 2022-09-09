import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  
  loginToggle !: boolean;

  constructor() 
  {

  }
  setLoginToggle(status:boolean)
  {
      this.loginToggle=status;
  }
  getLoginToggle()
  {
    return this.loginToggle;
  }
  ChangeLoginStatus()
  {
    this.loginToggle=!this.loginToggle;
  }
}
