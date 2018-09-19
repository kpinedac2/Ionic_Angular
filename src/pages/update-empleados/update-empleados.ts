import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpleadosProvider } from '../../providers/empleados/empleados';

/**
 * Generated class for the UpdateEmpleadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-update-empleados',
  templateUrl: 'update-empleados.html',
})
export class UpdateEmpleadosPage {

  empleados = {
    Empleado_Id:0,
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public empleadosProvider:EmpleadosProvider) {
    var data = navParams.get('empleado');
    console.log(data);
    this.empleados = data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateEmpleadosPage');
  }

  updateEmpleado(){
    this.empleadosProvider.updateEmpleado(this.empleados.Empleado_Id,this.empleados).then((result) => { 
      console.log('Update Correcto!'); 
      }, (err) => { 
      console.log(err); 
      });
  }

}
