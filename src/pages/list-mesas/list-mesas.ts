import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MesasServiceProvider } from '../../providers/mesas-service/mesas-service';
import { Mesa } from './mesa.model';
import {ListSecaoPage} from "../list-secao/list-secao";
//import {MesasServiceProvider} from '../../providers/'

/**
 * Generated class for the ListMesasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-mesas',
  templateUrl: 'list-mesas.html',
  providers:[MesasServiceProvider]
})
export class ListMesasPage {
  //  mesas: Array<{ numero: number, status: number }>;
   mesas:Mesa[];
  mesasAbertas:Mesa[];

   myColorClosed = "#199716";
   myColorOpened = "#ef1240";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private mesasServiceProvider:MesasServiceProvider ) {
    // for (var i = 1; i < 11; i++) {
    //   this.mesas.push(new Mesa(i));
    // }

  }

  ionViewDidLoad() {
    //load mesas
    this.mesasServiceProvider.getMesas().subscribe(Vendas => {
      this.mesasAbertas = Vendas;
        if (this.mesas.length > 10){
          console.log(this.mesas);
        }},
      (error: any)=>{
        console.log(1);
      });

  }

  openPageSecao(){
    this.navCtrl.push(ListSecaoPage);
  }

  openPagePedido(){

  }

}
