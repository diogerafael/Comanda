import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { VendedoresServiceProvider } from '../../providers/vendedores-service/vendedores-service';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { ListProdutosPage } from '../list-produtos/list-produtos';
import { ConfigPage } from '../config/config';
import {ConfigProvider} from '../../providers/config/config'
import { ListMesasPage } from '../list-mesas/list-mesas';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[
    VendedoresServiceProvider,
    ConfigProvider
  ]
})
export class LoginPage {

  public loading;
  public listaVendedores = Array<any>();
  public selectecUser = {save_login:false,cod_user:0,pass_user:"",};

  public backgroundImage = 'assets/imgs/background/background-5.jpg';

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private vendedorService:VendedoresServiceProvider,
              private loadingCtrl: LoadingController,
              private configProvider:ConfigProvider
            ) {
              let config = this.configProvider.getConfigData();
              console.log(config);
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

  logar(){
    console.log(this.selectecUser);
    this.configProvider.setConfigData(this.selectecUser.save_login,this.selectecUser.cod_user);
    this.navCtrl.push(ListMesasPage);
  }


}
