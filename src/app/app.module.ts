import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRotasModule } from "./app-rotas.module";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteComponent } from './restaurantes/restaurante/restaurante.component';
import { RestaurantesService } from './restaurantes/restaurantes.service';
import { RestauranteDetalhesComponent } from './restaurante-detalhes/restaurante-detalhes.component';
import { MenuComponent } from './restaurante-detalhes/menu/menu.component';
import { MenuItemComponent } from './restaurante-detalhes/menu-item/menu-item.component';
import { CarrinhoComprasComponent } from './restaurante-detalhes/carrinho-compras/carrinho-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,    
    AboutComponent,
    RestaurantesComponent,
    RestauranteComponent,
    RestauranteDetalhesComponent,
    MenuComponent,
    MenuItemComponent,
    CarrinhoComprasComponent

  ],
  imports: [
    BrowserModule,    
    AppRotasModule,
    HttpClientModule
  ],
  providers: [RestaurantesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
