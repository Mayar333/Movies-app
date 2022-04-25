import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthonticationService } from '../authontication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AuthonticationService , private _router:Router) { }
logOut(){


  this.auth.islogin.next(false)
  this._router.navigate(['login'])


}




enabelNavbar:any;
  ngOnInit(): void {

    this.auth.islogin.subscribe({
      next:(val=>{this.enabelNavbar=val;}
         )
    })


  }

}
