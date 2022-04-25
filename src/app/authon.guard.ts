import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthonticationService } from './authontication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthonGuard implements CanActivate {
  canActivate():boolean{

    if(this._authSerives.islogin.getValue() == true){
        return true;

    }

    else{

      this._router.navigate(['/login'])
      return false;
    }

  }







  constructor(private _authSerives:AuthonticationService , private _router:Router){}

  }


