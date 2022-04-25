import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from    "@angular/common/http";
import { TvsComponent } from './tvs/tvs.component';
import { PeopleComponent } from './people/people.component';
import { NetworkComponent } from './network/network.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavbarComponent,
    TvsComponent,
    PeopleComponent,
    NetworkComponent,
    SingleMovieComponent,
    RegisterComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
