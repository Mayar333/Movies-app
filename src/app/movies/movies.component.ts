import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  constructor(private _ApiService:ApiService) { }

      moviesContainer:any;
      rated:any;



  ngOnInit(): void {

     let x = this._ApiService.getNowPlayingMovies().subscribe(
        { next :(data)=>{

        console.log(data.results)
       this.moviesContainer = data.results;


        },
       error: (er)=>{console.log(er.message)} }





       );


//TOP RATED

let y= this._ApiService.getTopRated().subscribe({
  next:(x:any)=>{console.log(x.results)
  this.rated=x.results;
  },



  error:(er)=>{console.log(er.message)}
});

    }



  }


