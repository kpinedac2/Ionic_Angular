import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';

import {UpdateUsuarioPage} from '../update-usuario/update-usuario'

/**
 * Generated class for the UsuarioDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuario-detalle',
  templateUrl: 'usuario-detalle.html',
})
export class UsuarioDetallePage {

  usuarios: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public usuarioProvider: UsuariosProvider) {
    this.getUsuarios();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioDetallePage');
  }

  getUsuarios() {
    this.usuarioProvider.getUsuarios()
    .then(data => {
    this.usuarios = data;
    console.log(this.usuarios);
    });
  }

  sendUsuario(Usuario:any){
    this.navCtrl.push(UpdateUsuarioPage,{usuario: Usuario})
  }

}
