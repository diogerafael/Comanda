import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListSecaoPage } from './list-secao';

@NgModule({
  declarations: [
    ListSecaoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListSecaoPage),
  ],
})
export class ListSecaoPageModule {}
