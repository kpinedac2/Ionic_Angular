import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarcasProvider } from '../../providers/marcas/marcas';

import {UpdateMarcaPage} from '../update-marca/update-marca'

/**
 * Generated class for the MarcaDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-marca-detalle',
  templateUrl: 'marca-detalle.html',
})
export class MarcaDetallePage {

  marcas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public marcaProvider:MarcasProvider) {
    this.getMarcas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarcaDetallePage');
  }

  getMarcas() {
    this.marcaProvider.getMarcas()
    .then(data => {
    this.marcas = data;
    console.log(this.marcas);
    });
  }

  sendMarcas(Marcas:any){
    this.navCtrl.push(UpdateMarcaPage,{marcas: Marcas})
  }


}
