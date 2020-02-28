import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantesService } from '../restaurantes/restaurantes.service';
import { Restaurante } from 'app/restaurantes/restaurante/restaurante.model';

@Component({
  selector: 'everis-restaurante-detalhes',
  templateUrl: './restaurante-detalhes.component.html'
  
})
export class RestauranteDetalhesComponent implements OnInit {

  restaurante: Restaurante;
  constructor(private restaurantesService: RestaurantesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.params.id;
    this.restaurantesService.restaurantePorId(id)
            .subscribe((data) => {
              this.restaurante = data;
            });
  }


}


