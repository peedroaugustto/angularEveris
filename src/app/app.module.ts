import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRotasModule } from "./app-rotas.module";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteComponent } from './restaurantes/restaurante/restaurante.component';
import { RestaurantesService } from './restaurantes/restaurantes.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,    
    AboutComponent,
    RestaurantesComponent,
    RestauranteComponent

  ],
  imports: [
    BrowserModule,    
    AppRotasModule
  ],
  providers: [RestaurantesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
