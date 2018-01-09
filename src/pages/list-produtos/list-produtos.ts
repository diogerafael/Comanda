import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutosServiceProvider } from '../../providers/produtos-service/produtos-service';



@IonicPage()
@Component({
  selector: 'page-list-produtos',
  templateUrl: 'list-produtos.html',
  providers:[ProdutosServiceProvider]
})
export class ListProdutosPage {
  selectedItem: any;
  public produtos : Array<{promocaoPro:number,nomePro:string,codro:number,controlaEstoquePro:string,valorPro:number}>;
  private codSecao:number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
            private produtosServiceProvider:ProdutosServiceProvider ) {
    this.codSecao = navParams.get("codsecao");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListProdutosPage');
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
       this.produtos = null;
     }
  }


  loadData(val:number){
    this.produtosServiceProvider.getProdutos(val).subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        console.log(objeto_retorno);
        //console.log(data);
        if (objeto_retorno.result[0].status=200){//popular lista
          this.produtos = objeto_retorno.result[0].data;
        }
        //this.closeLoad();
        console.log(this.produtos);
      },error =>{
        console.log(error);
       // this.closeLoad();
      }
    )
  }

}
