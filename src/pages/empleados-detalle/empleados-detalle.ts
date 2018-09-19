import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpleadosProvider } from '../../providers/empleados/empleados';

import {UpdateEmpleadosPage} from '../update-empleados/update-empleados'
/**
 * Generated class for the EmpleadosDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-empleados-detalle',
  templateUrl: 'empleados-detalle.html',
})
export class EmpleadosDetallePage {

  empleados:any;
  empleadosx:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public empleadoProvider: EmpleadosProvider) {
    this.getEmpleados();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpleadosDetallePage');
  }

  getEmpleados() {
    this.empleadoProvider.getEmpleados()
    .then(data => {
    this.empleados = data;
    console.log(this.empleados);
    });
  }

  sendEmpleados(Empleados:any){
    this.navCtrl.push(UpdateEmpleadosPage,{empleado: Empleados})
  }
}
