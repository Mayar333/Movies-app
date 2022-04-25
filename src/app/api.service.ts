import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private req:HttpClient) { }



  getNowPlayingMovies():Observable<any> {

   let respon=  this.req.get("https://api.themoviedb.org/3/movie/now_playing?api_key=c51af34669b0c84d458fcaec5bd67e83&language=en-US&page=1");

   return respon;
  }

  getSinglemovie(id:number):Observable<any>{
   return  this.req.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c51af34669b0c84d458fcaec5bd67e83&language=en-US`);
  };



getTopRated(){

let responses = this.req.get("https://api.themoviedb.org/3/movie/top_rated?api_key=c51af34669b0c84d458fcaec5bd67e83&language=en-US&page=1");
return responses;
}









}
