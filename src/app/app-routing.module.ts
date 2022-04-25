import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthonGuard } from './authon.guard';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworkComponent } from './network/network.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { TvsComponent } from './tvs/tvs.component';

const routes: Routes = [
{path:"",redirectTo:"/register", pathMatch:"full"},
{path:"movies", component: MoviesComponent , canActivate:[AuthonGuard]},
{path:"register", component: RegisterComponent},
{path:"login" , component:LoginComponent},
{path:"singlemovie/:x/:y",component:SingleMovieComponent, canActivate:[AuthonGuard]},
{path:"tvs", component:  TvsComponent, canActivate:[AuthonGuard]},
{path:"people", component: PeopleComponent,canActivate:[AuthonGuard]},
{path:"network", component: NetworkComponent,canActivate:[AuthonGuard]},
{path:"**", component: MoviesComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
