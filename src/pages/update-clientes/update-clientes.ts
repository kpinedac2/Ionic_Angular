import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientesProvider } from '../../providers/clientes/clientes';

/**
 * Generated class for the UpdateClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-clientes',
  templateUrl: 'update-clientes.html',
})
export class UpdateClientesPage {

  clientes = {
    Cliente_Id:0,
    Cliente_Nombre1: '',
    Cliente_Nombre2: '',
    Cliente_Nombre3: '',
    Cliente_Apellido1:'',
    Cliente_Apellido2: '',
    Cliente_Apellido3:'',
    Cliente_Nacimiento: '',
    Cliente_Direccion: '',
    Cliente_Telefono: '',
    Cliente_Correo: '',
    Cliente_Nit: '',
    Cliente_Genero: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public clientesProvider:ClientesProvider) {
    var data = navParams.get('cliente');
    console.log(data);
    this.clientes = data;
  }

  updateCliente(){
    this.clientesProvider.updateCliente(this.clientes.Cliente_Id,this.clientes).then((result) => { 
      console.log(result); 
      }, (err) => { 
      console.log(err); 
      }); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateClientesPage');
  }

}
