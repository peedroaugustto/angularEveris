import { Component, OnInit } from '@angular/core';
import { Restaurante } from './restaurante/restaurante.model';
import { RestaurantesService } from './restaurantes.service';
@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html'
  
})
export class RestaurantesComponent implements OnInit {

  restaurantes: Restaurante[];

  constructor(private restaurantesService: RestaurantesService) { }

  ngOnInit(): void {
    this.restaurantesService.restaurantes().subscribe((data)=>{
      console.log(data);
      this.restaurantes = data;
    });
  }
  
  
  
 /* this.restaurantesService.restaurantes()
  .subscribe(restaurants => this.restaurantes = restaurants);
*/
}
