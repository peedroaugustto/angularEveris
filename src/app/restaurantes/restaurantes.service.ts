import {Restaurante} from './restaurante/restaurante.model';

export class RestaurantesService{

    constructor(){}

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

    restaurantes(): Restaurante[]{
        return this.restau;
    }
    
}