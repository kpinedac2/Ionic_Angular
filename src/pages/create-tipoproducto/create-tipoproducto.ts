import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TipoproductoProvider } from '../../providers/tipoproducto/tipoproducto';

/**
 * Generated class for the CreateTipoproductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-tipoproducto',
  templateUrl: 'create-tipoproducto.html',
})
export class CreateTipoproductoPage {

  tipoproductos = {
    TipoProducto_Descripcion: ' '
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public tipoproductoProvider: TipoproductoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateTipoproductoPage');
  }

  saveTipoProducto() { 
    this.tipoproductoProvider.addtipoProducto(this.tipoproductos).then((result) => { 
    console.log(result); 
    }, (err) => { 
    console.log(err); 
    }); 
    }
}
