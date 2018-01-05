import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListMesasPage } from './list-mesas';

@NgModule({
  declarations: [
    ListMesasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListMesasPage),
  ],
})
export class ListMesasPageModule {}
