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

  //  [
  //   {
  //      dataFechamento:string,
  //      codem:number,
  //      horaFechamento:string,
  //      codigo:number,
  //      cer:number,
  //      total:number,
  //      codcai:number,
  //      "coo":0,
  //      "status":0,
  //      "cooVenda":0,
  //      "contaOrigem":0,
  //      "dataAberura":"2017-12-28T00:00:00.000Z",
  //      "conta":10,
  //      "horaAberura":0.99846931712963,
  //      "itens":[
  //         {
  //            "quant":1,
  //            "valor":3,
  //            "codEmp":1,
  //            "cancelado":0,
  //            "codigo":10,
  //            "codPro":1,
  //            "codVend":1,
  //            "contaOrigem":0,
  //            "ordem":1,
  //            "nomePro":"PALHA ITALIANA"
  //         }
  //      ]
  //   }

   myColorClosed = "#199716";
   myColorOpened = "#ef1240";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private mesasServiceProvider:MesasServiceProvider ) {
    // this.mesas = [{numero:1,
    //   status:0},
    //   {numero:2,
    //   status:0},
    //   {numero:3,
    //   status:1},
    //   {numero:4,
    //   status:0}
    // ];
  }

  ionViewDidLoad() {
    //load mesas
    this.mesasServiceProvider.getMesas().subscribe(Vendas =>
      this.mesas = Vendas)
  }

  openPageSecao(){
    this.navCtrl.push(ListSecaoPage);
  }

  openPagePedido(){

  }

}
