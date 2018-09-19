import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MarcasProvider } from '../../providers/marcas/marcas';

/**
 * Generated class for the UpdateMarcaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-marca',
  templateUrl: 'update-marca.html',
})
export class UpdateMarcaPage {

  marcas = {
    Marcas_Id:0,
    Marca_Descripcion:''
  }


  constructor(public navCtrl: NavController, public navParams: NavParams, public marcaProvider:MarcasProvider) {
    var data = navParams.get('marcas');
    
    this.marcas = data;
    console.log(this.marcas);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateMarcaPage');
  }

  updateMarca(){
    this.marcaProvider.updateMarca(this.marcas.Marcas_Id,this.marcas).then((result) => { 
      console.log(result); 
      }, (err) => { 
      console.log(err); 
      }); 
  }

}
