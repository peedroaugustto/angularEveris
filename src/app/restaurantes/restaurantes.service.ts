import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable  } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Restaurante} from './restaurante/restaurante.model';
import {API} from '../app.api';
import {ErrorHandler} from '../app.error-handler';
import { from } from 'rxjs';

@Injectable()
export class RestaurantesService{

    constructor(private http: HttpClient){}
    /*
    restau: Restaurante[] = [ 
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
    */
   
   
    restaurantes(): Observable<Restaurante[]>{
        return this.http.get<Restaurante[]>(`${API}/restaurants`)
        .catch(ErrorHandler.handleError);
        
    }
    
    
    
}