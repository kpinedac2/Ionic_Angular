import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductosProvider } from '../../providers/productos/productos';

import {UpdateProductosPage} from '../update-productos/update-productos'
import {UpdateExistenciaPage} from '../update-existencia/update-existencia'

/**
 * Generated class for the ProductoDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-producto-detalle',
  templateUrl: 'producto-detalle.html',
})
export class ProductoDetallePage {

  productos: any;

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

  constructor(public navCtrl: NavController,public navParams: NavParams, public productosProvider:ProductosProvider,) {

    
       this.getProductos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoDetallePage');
  }

  getProductos() {
    this.productosProvider.getProductos()
    .then(data => {
    this.productos = data;
    console.log(this.productos);
    });
  }

  sendProductos(Producto:any){
    this.navCtrl.push(UpdateProductosPage,{producto: Producto})
  }

  updateExistencia(Productos:any){
    this.navCtrl.push(UpdateExistenciaPage,{producto: Productos})
  }

}
