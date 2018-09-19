import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EmpleadosProvider } from '../../providers/empleados/empleados';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';


/**
 * Generated class for the UpdateUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-usuario',
  templateUrl: 'update-usuario.html',
})
export class UpdateUsuarioPage {

  empleados:any;
  usuario = {
    Usuario_Id:0,
    Usuario_Nombre: '',
    Usuario_Password: '',
    Usuario_Estado: '',
    Usuario_Empleado: 0
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public empleadoProvider:EmpleadosProvider, 
    public usuariosProvider:UsuariosProvider) {
    var data = navParams.get('usuario');
    
    this.usuario = data;
    console.log(this.usuario);
    this.getEmpleados();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateUsuarioPage');
  }

  getEmpleados() {
    this.empleadoProvider.getEmpleados()
    .then(data => {
    this.empleados = data;
    console.log(this.empleados);
    });
  }

  updateUsuario(){
    this.usuariosProvider.updateUsuario(this.usuario.Usuario_Id,this.usuario).then((result) => { 
      console.log(result); 
      }, (err) => { 
      console.log(err); 
      }); 
  }
}
