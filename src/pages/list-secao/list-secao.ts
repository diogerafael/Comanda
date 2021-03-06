import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Secao} from "./secao.model";
import {SecaoServiveProvider} from "../../providers/secao-service/secao-service";
import {ListProdutosPage} from "../list-produtos/list-produtos";


@IonicPage()
@Component({
  selector: 'page-list-secao',
  templateUrl: 'list-secao.html',
  providers:[SecaoServiveProvider]
})
export class ListSecaoPage {

  secoes:Secao[];
  public loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private secaoservice:SecaoServiveProvider,private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ListSecaoPage');
    //this.openLoad();
    this.secaoservice.getSecoes().subscribe(Secao =>
    this.secoes = Secao)
    //this.closeLoad();
  }

  openLoad(Value) {
    this.loading = this.loadingCtrl.create({
      content: 'Carregando Dados...'
    });
    this.loading.present();
  }

  closeLoad(){
    this.loading.dismiss();
  }

  openPageProdutos(AcodSec:string){
    console.log("aqui"+AcodSec);
    this.navCtrl.push(ListProdutosPage,{codsecao:AcodSec});
  }

}
