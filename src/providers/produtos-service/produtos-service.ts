import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Produto} from "../../pages/list-produtos/produto.model";

/*
  Generated class for the ProdutosServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdutosServiceProvider {

  constructor(public http: Http) {
    console.log('Hello ProdutosServiceProvider Provider');
  }

  getProdutosByDesc(ADesc:string){
    return this.http.get("http://192.168.1.13:8080/datasnap/rest/TTSM/Produtos/0/"+ADesc);
  }

  getProdutos(ACodSec:number):Observable<Produto[]>{
    return this.http.get("http://192.168.1.13:8080/datasnap/rest/TTSM/Produtos/0//"+ACodSec).
      map(response => response.json().result[0].data);
  }

}
