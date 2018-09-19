import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductosProvider } from '../../providers/productos/productos';

import { ProveedorProvider } from '../../providers/proveedor/proveedor';
import { TipoproductoProvider } from '../../providers/tipoproducto/tipoproducto';
import { MarcasProvider } from '../../providers/marcas/marcas';

import { ExistenciasProvider } from '../../providers/existencias/existencias';

/**
 * Generated class for the CreateProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-producto',
  templateUrl: 'create-producto.html',
})
export class CreateProductoPage {

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

  existencias = {
    Existencia_Producto: 0,
    Existencia_Cantidad: 0
  }

  proveedores:any;
  tipoproductos:any;
  marcas:any;

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
  

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public productosProvider:ProductosProvider,
    public proveedorProvider:ProveedorProvider,
    public tipoproductoProvider:TipoproductoProvider,
    public marcaProvider:MarcasProvider,
    public existenciasProvider:ExistenciasProvider) {
      this.getProveedores();
      this.getTipoProducto();
      this.getMarcas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateProductoPage');
  }

  saveProducto() { 
    this.productosProvider.addProducto(this.productos).then((result) => { 
     this.getProductByNombre(this.productos.Producto_Nombre);
      }, (err) => { 
      console.log(err); 
      }); 
      
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


    getProductByNombre(name:string){
      this.productosProvider.getProductoByName(name)
      .subscribe(data => {
        this.productosx = data
        this.existencias.Existencia_Producto = this.productosx.Producto_Id;
        this.existenciasProvider.addExistencias(this.existencias).then((result) => { 
        console.log('Did it');
        console.log(result); 
        }, (err) => { 
        console.log(err); 
        }); 

      });
    }

}
