import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProveedorProvider } from '../../providers/proveedor/proveedor';




/**
 * Generated class for the UpdateProveedoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-proveedores',
  templateUrl: 'update-proveedores.html',
})
export class UpdateProveedoresPage {

  proveedores = {
    Proveedor_Id:0,
    Proveedor_Nombre: '',
    Proveedor_Representante: '',
    Proveedor_Telefono: '',
    Proveedor_Correo: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedoresProvider:ProveedorProvider) {

    var data = navParams.get('proveedor');
    
    this.proveedores = data;
    console.log(this.proveedores);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateProveedoresPage');
  }

  updateProveedores(){
    this.proveedoresProvider.updateProveedores(this.proveedores.Proveedor_Id,this.proveedores).then((result) => { 
      console.log(result); 
      }, (err) => { 
      console.log(err); 
      }); 
  }

}
