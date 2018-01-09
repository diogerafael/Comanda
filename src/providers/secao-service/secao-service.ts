import { Injectable } from '@angular/core';
import {Vendedor} from "../../pages/login/vendedor.model";
import {Observable} from "rxjs/Observable";
import {Secao} from "../../pages/list-secao/secao.model";
import {Http} from '@angular/http';

/*
  Generated class for the SecaoServiveProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SecaoServiveProvider {

  constructor(public http: Http) {
    //console.log('Hello SecaoServiveProvider Provider');
  }

  getSecoes():Observable<Secao[]>{
    return this.http.get("http://127.0.0.1:8080/datasnap/rest/TTSM/Secao").
    map(response => response.json().result[0].data);
  }

}
