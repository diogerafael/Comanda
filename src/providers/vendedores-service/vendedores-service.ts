import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the VendedoresServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VendedoresServiceProvider {
  //private BASE_URL = "";

  constructor(public http: Http) {
    console.log('Hello VendedoresServiceProvider Provider');
  }

  getVendedores(){
   return this.http.get("http://192.168.1.13:8080/datasnap/rest/TTSM/Vendedores/0");
  }

}
