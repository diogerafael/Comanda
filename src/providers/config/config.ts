import { Injectable } from '@angular/core';

let CONFIG_KEY_NAME = "config";

@Injectable()
export class ConfigProvider {

  private config = {
    save_login:false,
    cod_user:0,
    pass_user:"",
    ip_servidor:""
  }

  constructor() {    
  }


  getConfigData():any{
    return localStorage.getItem(CONFIG_KEY_NAME) || {};
  }

  setConfigData(save_login?:boolean,cod_user?:number,pass_user?:string,ip_servidor?:string){
    let config = {  
      save_login:false,
      cod_user:0,
      pass_user:"",
      ip_servidor:""
    };


    if(save_login){
      config.save_login = save_login;
    }

    if(cod_user){
      config.cod_user = cod_user;
    }

    if (pass_user){
      config.pass_user = pass_user;
    }

    if(ip_servidor){
      config.ip_servidor = ip_servidor;
    }

  localStorage.setItem(CONFIG_KEY_NAME,JSON.stringify(config));
  }

}
