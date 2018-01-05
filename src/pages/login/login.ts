import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { VendedoresServiceProvider } from '../../providers/vendedores-service/vendedores-service';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { ListProdutosPage } from '../list-produtos/list-produtos';
import { ConfigPage } from '../config/config';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[
    VendedoresServiceProvider
  ]
})
export class LoginPage {

  public loading;
  public listaVendedores = Array<any>();
  codVendedor:number;

  public backgroundImage = 'assets/imgs/background/background-5.jpg';

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private vendedorService:VendedoresServiceProvider,
              private loadingCtrl: LoadingController
            ) {
  }

  ionViewDidEnter() {
    this.openLoad();
    this.vendedorService.getVendedores().subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        console.log(objeto_retorno);
        //console.log(data);
        if (objeto_retorno.result[0].status=200){//popular lista
          this.listaVendedores = objeto_retorno.result[0].data;          
        }                
        this.closeLoad();
        console.log("To aqui");
      },error =>{
        console.log(error);
        this.closeLoad();
      }
    )    
  }

  ionViewDidLoad() {
    // this.vendedorService.getVendedores().subscribe(
    //   data=>{
    //     const response = (data as any);
    //     const objeto_retorno = JSON.parse(response._body);
    //     console.log(objeto_retorno);
    //     //console.log(data);
    //     if (objeto_retorno.result[0].status=200){//popular lista
    //       this.listaVendedores = objeto_retorno.result[0].data;          
    //     }        
    //     console.log(this.listaVendedores);
    //   },error =>{
    //     console.log(error);
    //   }
    // )    
  }

  openLoad() {
    this.loading = this.loadingCtrl.create({
      content: 'Carregando Dados...'
    });  
    this.loading.present();
  }

  closeLoad(){
    this.loading.dismiss();
  }


  abrirProduto(){
    this.navCtrl.push(ListProdutosPage);
  }


  openPageConfig(){
    this.navCtrl.push(ConfigPage);
  }

}
