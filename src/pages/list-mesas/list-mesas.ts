import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
})
export class ListMesasPage {
   mesas: Array<{ numero: number, status: number }>;

   myColorClosed = "#199716";
   myColorOpened = "#ef1240";
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mesas = [{numero:1,
      status:0},
      {numero:2,
      status:0},
      {numero:3,
      status:1},
      {numero:4,
      status:0}
    ];
    console.log(this.mesas);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListMesasPage');
  }

}
