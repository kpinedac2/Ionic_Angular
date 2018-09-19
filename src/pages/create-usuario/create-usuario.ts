import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { EmpleadosProvider } from '../../providers/empleados/empleados';

/**
 * Generated class for the CreateUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-usuario',
  templateUrl: 'create-usuario.html',
})
export class CreateUsuarioPage {

  usuario = {
    Usuario_Nombre: '',
    Usuario_Password: '',
    Usuario_Estado: '',
    Usuario_Empleado: 0
  }

  empleados: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public usuarioProvider: UsuariosProvider,public empleadoProvider: EmpleadosProvider) {
    this.getEmpleados();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateUsuarioPage');
  }

  saveUsuario() { 
    this.usuarioProvider.addUsuarios(this.usuario).then((result) => { 
    console.log(result); 
    }, (err) => { 
    console.log(err); 
    }); 
    }

    getEmpleados() {
      this.empleadoProvider.getEmpleados()
      .then(data => {
      this.empleados = data;
      console.log(this.empleados);
      });
    }
  
}
