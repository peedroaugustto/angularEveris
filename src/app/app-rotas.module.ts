import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'sobre', component: AboutComponent},
    {path: 'restaurantes', component: RestaurantesComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRotasModule { }
