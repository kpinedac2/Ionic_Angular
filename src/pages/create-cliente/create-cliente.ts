import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientesProvider } from '../../providers/clientes/clientes';

/**
 * Generated class for the CreateClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation..
 * 
 * 
 * Cliente_Nombre1 nvarchar(50),
Cliente_Nombre2 nvarchar(50),
Cliente_Nombre3 nvarchar(50),
Cliente_Apellido1 nvarchar(50),
Cliente_Apellido2 nvarchar(50),
Cliente_Apellido3 nvarchar(50),
Cliente_Nacimiento Date,
Cliente_Direccion nvarchar(50),
Cliente_Telefono varchar(15),
Cliente_Correo nvarchar (50),
Cliente_Nit varchar(15),
Cliente_Genero varchar(1));

 */

@IonicPage()
@Component({
  selector: 'page-create-cliente',
  templateUrl: 'create-cliente.html',
})
export class CreateClientePage {

  clientes = {
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

  constructor(public navCtrl: NavController, public navParams: NavParams,public clientesProvider: ClientesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateClientePage');
  }

  saveCliente() { 
    this.clientesProvider.addClientes(this.clientes).then((result) => { 
    console.log(result); 
    }, (err) => { 
    console.log(err); 
    }); 
    }

}
