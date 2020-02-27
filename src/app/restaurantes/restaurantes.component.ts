import { Component, OnInit } from '@angular/core';
import { Restaurante } from './restaurante/restaurante.model';

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html'
  
})
export class RestaurantesComponent implements OnInit {

  restaurantes: Restaurante[] = [ 
    {
    id: "bread-bakery",
    nome: "Bread & Bakery",
    categoria: "Bakery",
    estimativaDeEntrega: "25m",
    avaliacao: 4.9,
    imagem: "assets/img/restaurants/breadbakery.png"
    },
    {
      id: "burger-house",
      nome: "Burger House",
      categoria: "Hamburgers",
      estimativaDeEntrega: "100m",
      avaliacao: 3.5,
      imagem: "assets/img/restaurants/burgerhouse.png"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
