import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginData } from './login-data';

@Injectable({
  providedIn: 'root'
})
export class AuthonticationService {

  constructor( private req:HttpClient) { }


  islogin=new BehaviorSubject(false);

register(user:any):Observable<any>{
 return this.req.post( "https://route-egypt-api.herokuapp.com/signup" , user);

}


login(loginData:LoginData):Observable<any>{

  return this.req.post("https://route-egypt-api.herokuapp.com/signin" , loginData)
}






}
