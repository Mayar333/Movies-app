import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {


  singleMovieObj:any;
   recevied:boolean=false;

  constructor( private _ApiService : ApiService ,  public _ActivatedRoute:ActivatedRoute  ) { }

  ngOnInit(): void {

 let movieId =this._ActivatedRoute.snapshot.params['x'];
 console.log(movieId);






this._ApiService.getSinglemovie(movieId).subscribe(
  { next:(data)=>{console.log(data)
    this.singleMovieObj= data ;
      this.recevied=true;
  },


 error:()=>{}})


  }

}
