import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientesProvider } from '../../providers/clientes/clientes';

import {UpdateClientesPage} from '../update-clientes/update-clientes'


/**
 * Generated class for the ClientesDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientes-detalle',
  templateUrl: 'clientes-detalle.html',
})
export class ClientesDetallePage {
  
  clientes : any;
  clientex: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public clientesProvider: ClientesProvider) {
    this.getClientes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientesDetallePage');
  }

  getClientes() {
    this.clientesProvider.getClientes()
    .then(data => {
    this.clientes = data;
    console.log(this.clientes);
    });
  }

  sendClientes(Cliente:any){
    this.navCtrl.push(UpdateClientesPage,{cliente: Cliente})
  }

}
