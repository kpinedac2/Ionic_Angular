import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpleadosProvider } from '../../providers/empleados/empleados';

/**
 * Generated class for the CreateEmpleadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-empleado',
  templateUrl: 'create-empleado.html',
})
export class CreateEmpleadoPage {

  message:any;
  empleados = {
    Empleado_Nombre1: '',
    Empleado_Nombre2: '',
    Empleado_Nombre3: '',
    Empleado_Apellido1:'',
    Empleado_Apellido2: '',
    Empleado_Apellido3:'',
    Empleado_Nacimiento: '',
    Empleado_Direccion: '',
    Cliente_Telefono: '',
    Empleado_Telefono: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,public empleadoProvider: EmpleadosProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateEmpleadoPage');
  }

  saveEmpleado() { 
    this.empleadoProvider.addEmpleados(this.empleados).then((result) => { 
    console.log(result); 
    this.message = 'Esta bien';
    }, (err) => { 
    console.log(err); 
    }); 
    }

}
