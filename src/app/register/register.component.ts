import { Component, OnInit } from '@angular/core';
import {FormGroup  , FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthonticationService } from '../authontication.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private auth:AuthonticationService , private _Router:Router) { }



 msg:string="";

userForm = new FormGroup({
  first_name: new FormControl(null,[
    Validators.minLength(3),
    Validators.maxLength(10),
    Validators.required,
    Validators.pattern(/^[A-Z]/)
  ]),

  last_name: new FormControl(null,[
    Validators.minLength(3),
    Validators.maxLength(10),
    Validators.required,
    Validators.pattern(/^[A-Z]/)
  ] ),
  age:new FormControl(null,[
    Validators.min(10),
    Validators.max(50),
    Validators.required
  ]),

  email: new FormControl(null,[
    Validators.email,
    Validators.required
  ]),

  password:new FormControl(null,[
    Validators.required
  ])







});



showFormData(form:any){
if (this.userForm.valid){
  console.log(this.userForm.value);

  this.auth.register(this.userForm.value).subscribe({
    next: (resp)=>{console.log(resp);
this.msg=resp.message;
if(resp.message=="success"){
  this._Router.navigate(['/login'])


}
    }  ,
     error:(err)=>{console.log(err)}       });
}


}




  ngOnInit(): void {
  }

}
