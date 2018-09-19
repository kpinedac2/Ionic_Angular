import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProveedorProvider } from '../../providers/proveedor/proveedor';

/**
 * Generated class for the CreateProveedorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-proveedor',
  templateUrl: 'create-proveedor.html',
})
export class CreateProveedorPage {

  proveedores = {
    Proveedor_Nombre: '',
    Proveedor_Representante: '',
    Proveedor_Telefono: '',
    Proveedor_Correo: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedorProvider: ProveedorProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateProveedorPage');
  }

  saveProveedor() { 
    this.proveedorProvider.addProveedor(this.proveedores).then((result) => { 
    console.log(result); 
    }, (err) => { 
    console.log(err); 
    }); 
    }

}
