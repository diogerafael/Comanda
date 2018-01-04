import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

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

  getProdutos(){
    return this.http.get("http://localhost:8080/datasnap/rest/TTSM/Produtos");
  }

  getProdutosByDesc(ADesc){
    return this.http.get("http://localhost:8080/datasnap/rest/TTSM/Produtos/0/"+ADesc);
  }

}
