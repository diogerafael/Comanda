import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login'
import { VendedoresServiceProvider } from '../providers/vendedores-service/vendedores-service';
import { ListProdutosPage } from '../pages/list-produtos/list-produtos';
import { ListProdutosPageModule } from '../pages/list-produtos/list-produtos.module';
import { ProdutosServiceProvider } from '../providers/produtos-service/produtos-service';
import { ConfigPageModule } from '../pages/config/config.module';
import { ConfigProvider } from '../providers/config/config';
import { ListMesasPageModule } from '../pages/list-mesas/list-mesas.module';
import { ListMesasPage } from '../pages/list-mesas/list-mesas';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    ListProdutosPageModule,
    ConfigPageModule,
    ListMesasPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ListMesasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VendedoresServiceProvider,
    ProdutosServiceProvider,
    ConfigProvider
  ]
})
export class AppModule {}
