import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarcasProvider } from '../../providers/marcas/marcas';

/**
 * Generated class for the CreateMarcasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-marcas',
  templateUrl: 'create-marcas.html',
})
export class CreateMarcasPage {

  marca = {
    Marca_Descripcion: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public marcaProvider:MarcasProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateMarcasPage');
  }

  saveMarca() { 
    this.marcaProvider.addMarca(this.marca).then((result) => { 
    console.log(result); 
    }, (err) => { 
    console.log(err); 
    }); 
    }

  

}
