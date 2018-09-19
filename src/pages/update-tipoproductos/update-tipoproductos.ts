import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TipoproductoProvider } from '../../providers/tipoproducto/tipoproducto';

/**
 * Generated class for the UpdateTipoproductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-tipoproductos',
  templateUrl: 'update-tipoproductos.html',
})
export class UpdateTipoproductosPage {

  tipoproductos = {
    TipoProducto_Id:0,
    TipoProducto_Descripcion: ' '
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public tipoproductoProvider:TipoproductoProvider) {
    var data = navParams.get('tipoproductos');
    
    this.tipoproductos = data;
    console.log(this.tipoproductos);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateTipoproductosPage');
  }

  updateTipoproducto(){
    this.tipoproductoProvider.updateTipoproducto(this.tipoproductos.TipoProducto_Id,this.tipoproductos).then((result) => { 
      console.log(result); 
      }, (err) => { 
      console.log(err); 
      }); 
  }

}
