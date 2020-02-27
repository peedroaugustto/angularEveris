import { Component, OnInit, Input } from '@angular/core';

import {Restaurante} from './restaurante.model';
import { from } from 'rxjs';
@Component({
  selector: 'everis-restaurante',
  templateUrl: './restaurante.component.html',
  
})
export class RestauranteComponent implements OnInit {


 @Input() restaurante: Restaurante;

  constructor() { }

  ngOnInit(): void {
  }

}
