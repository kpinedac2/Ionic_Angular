import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TipoproductoProvider } from '../../providers/tipoproducto/tipoproducto';

import {UpdateTipoproductosPage} from '../update-tipoproductos/update-tipoproductos'

/**
 * Generated class for the TipoproductoDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tipoproducto-detalle',
  templateUrl: 'tipoproducto-detalle.html',
})
export class TipoproductoDetallePage {

  tipoproductos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public tipoproductoProvider: TipoproductoProvider) {
    this.getTipoProducto();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TipoproductoDetallePage');
  }

  getTipoProducto() {
    this.tipoproductoProvider.getTipoProductos()
    .then(data => {
    this.tipoproductos = data;
    console.log(this.tipoproductos);
    });
  }

  sendTiposProductos(TiposProductos:any){
    this.navCtrl.push(UpdateTipoproductosPage,{tipoproductos: TiposProductos})
  }

}
