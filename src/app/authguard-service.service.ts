import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {

  constructor() { }
  gettoken():boolean{
    if(localStorage.getItem("session")==undefined||localStorage.getItem("session")=="false")
    {
      return false;
    }
    else 
    {
      return true;
    }
  }
}

