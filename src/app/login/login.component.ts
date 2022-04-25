import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthonticationService } from '../authontication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
msg:any;
  constructor( private auth:AuthonticationService , private  _Router:Router ) { }



loginForm=new FormGroup({
 email: new FormControl(null, [Validators.required,Validators.email]),
 password: new FormControl(null ,[Validators.required]),
})


makeLogin(data:any){
console.log(data);
if(data.valid){
  this.auth.login(data.value).subscribe({
    next:(res)=>{console.log(res);
this.msg=res.message;

if(res.message=="success"){
this._Router.navigate(['/movies']);
 this.auth.islogin.next(true)


}

else{
  this._Router.navigate(['/login'])
}






    }
  })
}



}








  ngOnInit(): void {
  }

}
