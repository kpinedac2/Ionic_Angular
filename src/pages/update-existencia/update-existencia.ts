import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ExistenciasProvider } from '../../providers/existencias/existencias';

/**
 * Generated class for the UpdateExistenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-existencia',
  templateUrl: 'update-existencia.html',
})
export class UpdateExistenciaPage {

  productosx = {
    Producto_Id:0,
    Producto_Codigo: '',
    Producto_Nombre:'',
    Producto_Costo:0.0,
    Producto_Precio:0.0,
    Producto_Proveedor:0,
    Producto_Caducidad:'',
    Producto_TipoProducto:0,
    Producto_Marca:0
  }

  existencias = {
    Existencia_Id:0,
    Existencia_Producto: 0,
    Existencia_Cantidad: 0
  }

  existenciasy = {
    Existencia_Id:0,
    Existencia_Producto: 0,
    Existencia_Cantidad: 0
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public existenciaProvider:ExistenciasProvider) {
    this.existenciaProvider
    this.productosx = navParams.get('producto');
    console.log(this.productosx);

    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateExistenciaPage');
  }

  getExistenciasPyProd(pro:number){
    this.existenciaProvider.getExistenciasPyProd(pro)
    .subscribe(data => {
      this.existenciasy = data;
      this.existencias.Existencia_Id = this.existenciasy.Existencia_Id;
      this.existencias.Existencia_Producto = this.productosx.Producto_Id;

      var x = 0;
      x = +this.existenciasy.Existencia_Cantidad + +this.existencias.Existencia_Cantidad

      this.existencias.Existencia_Cantidad = x;

      this.update(this.existencias.Existencia_Id,this.existencias)
    });
  }

  update(id:number,producto:any){
    this.existenciaProvider.updateExistencia(id,producto).then((result) => { 
      console.log(result); 
      console.log('ok');
      }, (err) => { 
      console.log(err); 
      }); 
  }

  triggerUpdate(){
    this.getExistenciasPyProd(this.productosx.Producto_Id);
  }


}
