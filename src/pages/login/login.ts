import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VendedoresServiceProvider } from '../../providers/vendedores-service/vendedores-service';
import { errorHandler } from '@angular/platform-browser/src/browser';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[
    VendedoresServiceProvider
  ]
})
export class LoginPage {

  public listaVendedores = Array<any>();
  codVendedor:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private vendedorService:VendedoresServiceProvider
            ) {
  }

  ionViewDidLoad() {
    this.vendedorService.getVendedores().subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        console.log(objeto_retorno);
        //console.log(data);
        if (objeto_retorno.result[0].status=200){//popular lista
          this.listaVendedores = objeto_retorno.result[0].data;          
        }        
        console.log(this.listaVendedores);
      },error =>{
        console.log(error);
      }
    )    
  }

}
