import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from '../components/registration/registration.component';
import { MoviesComponent } from '../components/movies/movies.component';
import { MapsComponent } from './../components/maps/maps.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: '', redirectTo: 'registration', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  { path: 'maps', component: MapsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
