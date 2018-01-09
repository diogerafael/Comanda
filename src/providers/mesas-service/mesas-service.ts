import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Mesa} from "../../pages/list-mesas/mesa.model";

/*
  Generated class for the MesasServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MesasServiceProvider {

  constructor(public http: Http) {
    console.log('Hello MesasServiceProvider Provider');
  }

  getMesas(ANrMesa:string){
    return this.http.get("http://localhost:8080/datasnap/rest/TTSM/Vendas/"+ANrMesa);
  }

  getMesas():Observable<Mesa[]>{
    return this.http.get("http://192.168.1.13:8080/datasnap/rest/TTSM/Secao").
    map(response => response.json().result[0].data);
  }

}
