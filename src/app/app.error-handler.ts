import { HttpErrorResponse } from '@angular/common/http'
//import ' rxjs/add/observable/throw ';
import { Observable  } from 'rxjs/Observable';


export class ErrorHandler{
    static handleError(error: HttpErrorResponse | any){
        let mensagemDeErro: string;

        if(error instanceof HttpErrorResponse){
            mensagemDeErro = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
        }else{
            mensagemDeErro = error.toString();
        }

        console.log(mensagemDeErro);
        return Observable.throw(mensagemDeErro) ;
        
    }
}