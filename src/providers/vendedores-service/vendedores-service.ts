import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Vendedor } from '../../pages/login/vendedor.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the VendedoresServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VendedoresServiceProvider {
  
  constructor(private http: Http) {   
  }

  getVendedores():Observable<Vendedor[]>{
   return this.http.get("http://127.0.0.1:8080/datasnap/rest/TTSM/Vendedores/0").
   map(response => response.json().result[0].data);  
  }

}
