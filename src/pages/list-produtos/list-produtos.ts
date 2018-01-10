import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutosServiceProvider } from '../../providers/produtos-service/produtos-service';
import {Produto} from "./produto.model";



@IonicPage()
@Component({
  selector: 'page-list-produtos',
  templateUrl: 'list-produtos.html',
  providers:[ProdutosServiceProvider]
})
export class ListProdutosPage {
  selectedItem: any;
  public produtos : Produto[];//Array<{promocaoPro:number,nomePro:string,codro:number,controlaEstoquePro:string,valorPro:number}>;
  private codSecao:number;

    constructor(public navCtrl: NavController, public navParams: NavParams,
            private produtosServiceProvider:ProdutosServiceProvider ) {
    this.codSecao = navParams.get("codsecao");
    console.log(this.codSecao);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ListProdutosPage');
  this.loaddData();
  }

  ionViewDidEnter(){
    //carregar produtos

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    console.log(item);
  }


  getItems(ev) {
    // Reset items back to all of the items
    //this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.loadData(val);
       //this.items = this.items.filter((item) => {
       //  return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      // })
     }else{
        this.loaddData();
     }
  }

  loaddData(){
   // this.openLoad();
    this.produtosServiceProvider.getProdutos(this.codSecao).subscribe(Produtos =>
    {
      console.log(Produtos);
      this.produtos = Produtos})
    console.log(this.produtos
    );
   // this.closeLoad();
  }

  loadData(val:string){
    this.produtosServiceProvider.getProdutos(this.codSecao,val).subscribe(Produtos =>
    {
      console.log(Produtos);
      this.produtos = Produtos})
    console.log(this.produtos
    );
  }

  addItem(ACodProduto){

  }

  remItem(){

  }

}
