import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProveedorProvider } from '../../providers/proveedor/proveedor';
import { TipoproductoProvider } from '../../providers/tipoproducto/tipoproducto';
import { MarcasProvider } from '../../providers/marcas/marcas';
import { ProductosProvider } from '../../providers/productos/productos';

/**
 * Generated class for the UpdateProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-productos',
  templateUrl: 'update-productos.html',
})
export class UpdateProductosPage {

  productos = {
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

  proveedores:any;
  tipoproductos:any;
  marcas:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public productosProvider:ProductosProvider,
    public proveedorProvider:ProveedorProvider,
    public tipoproductoProvider:TipoproductoProvider,
    public marcaProvider:MarcasProvider) {
    var data = navParams.get('producto');
    
    this.productos = data;
    console.log(this.productos);

    this.getProveedores();
      this.getTipoProducto();
      this.getMarcas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateProductosPage');
  }

  getProveedores() {
    this.proveedorProvider.getProveedor()
    .then(data => {
    this.proveedores = data;
    console.log(this.proveedores);
    });
  }

  getTipoProducto() {
    this.tipoproductoProvider.getTipoProductos()
    .then(data => {
    this.tipoproductos = data;
    console.log(this.tipoproductos);
    });
  }

  getMarcas() {
    this.marcaProvider.getMarcas()
    .then(data => {
    this.marcas = data;
    console.log(this.marcas);
    });
  }

  updateProducto(){
    this.productosProvider.updateProducto(this.productos.Producto_Id,this.productos).then((result) => { 
      console.log(result); 
      }, (err) => { 
      console.log(err); 
      }); 
  }

}
