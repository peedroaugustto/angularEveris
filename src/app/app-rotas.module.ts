import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteDetalhesComponent } from './restaurante-detalhes/restaurante-detalhes.component';
import { MenuComponent } from './restaurante-detalhes/menu/menu.component';
import { ReviewsComponent } from './restaurante-detalhes/reviews/reviews.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'sobre', component: AboutComponent},
    {path: 'restaurantes', component: RestaurantesComponent},
    {path: 'restaurantes/:id', component: RestauranteDetalhesComponent,
      children: [
        {path: '', redirectTo: 'menu', pathMatch: 'full'},
        {path: 'menu', component: MenuComponent},
        {path: 'reviews', component: ReviewsComponent}
      ]  
    }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRotasModule { }
