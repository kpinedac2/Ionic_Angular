import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProveedorProvider } from '../../providers/proveedor/proveedor';

import {UpdateProveedoresPage} from '../update-proveedores/update-proveedores'
/**
 * Generated class for the ProveedorDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-proveedor-detalle',
  templateUrl: 'proveedor-detalle.html',
})
export class ProveedorDetallePage {

  proveedores: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedorProvider: ProveedorProvider) {
    this.getProveedores();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProveedorDetallePage');
  }

  getProveedores() {
    this.proveedorProvider.getProveedor()
    .then(data => {
    this.proveedores = data;
    console.log(this.proveedores);
    });
  }

  sendProveedores(Proveedor:any){
    this.navCtrl.push(UpdateProveedoresPage,{proveedor: Proveedor})
  }
}
