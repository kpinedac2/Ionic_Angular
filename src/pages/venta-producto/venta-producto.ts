import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { ClientesProvider } from '../../providers/clientes/clientes';
import { VentaProvider } from '../../providers/venta/venta';
import { FacturaProvider } from '../../providers/factura/factura';
import { VentadetalleProvider } from '../../providers/ventadetalle/ventadetalle';
import { ProductosProvider } from '../../providers/productos/productos';

/**
 * Generated class for the VentaProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-venta-producto',
  templateUrl: 'venta-producto.html',
})
export class VentaProductoPage {

  venta = {
    Ventas_Fecha: '',
    Ventas_Usuario: 1,
    Ventas_Cliente: 0,
    Ventas_Total: 0
  }

  ventay = {
    Ventas_Id: 0,
    Ventas_Fecha: '',
    Ventas_Usuario: 1,
    Ventas_Cliente: 0,
    Ventas_Total: 0
  }

  ventaz= {
    Ventas_Id: 0,
    Ventas_Fecha: '',
    Ventas_Usuario: 1,
    Ventas_Cliente: 0,
    Ventas_Total: 0
  }

  venta_detalle = {
    VentaDetalle_Ventas: 0,
    VentaDetalle_Producto: 1,
    VentaDetalle_Cantidad: 1
  }

  factura = {
    Factura_Serie: 'A',
    Factura_Venta: 0,
    Factura_Cliente: 0
  }

  total = {
    total: 0,
  }

  usuarios:any;
  clientes:any;
  show: boolean = true;
  ventas_detalle:any;
  productos: any;
  totalx:number;
  obje:any 

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuarioProvider:UsuariosProvider,
    public clientesProvider: ClientesProvider,
    public ventaProvider:VentaProvider,
    public facturaProvider:FacturaProvider,
    public ventadetalleProvider:VentadetalleProvider,
    public productosProvider:ProductosProvider
  ) {
  this.getClientes();
  this.getUsuarios();
  this.getProductos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VentaProductoPage');
  }

  getUsuarios() {
    this.usuarioProvider.getUsuarios()
    .then(data => {
    this.usuarios = data;
    console.log(this.usuarios);
    });
  }

  getClientes() {
    this.clientesProvider.getClientes()
    .then(data => {
    this.clientes = data;
    console.log(this.clientes);
    });
  }
  
  setVentaDatos(){
    localStorage.setItem("venta",JSON.stringify(this.venta));
    this.ventaProvider.addVenta(this.venta).then((result) => { 
      this.ventay = JSON.parse(JSON.stringify(result));

      this.factura.Factura_Venta = this.ventay.Ventas_Id;
      this.factura.Factura_Cliente = this.ventay.Ventas_Cliente;

      this.facturaProvider.addFactura(this.factura).then((result) => { 

        localStorage.setItem("ventasy",JSON.stringify(this.ventay));
        localStorage.setItem("factura",JSON.stringify(result));
        console.log('tudo bem');

      }, (err) => { 
      console.log(err); 
      }); 

       }, (err) => { 
       console.log(err); 
       }); 
  }

  getDetalle(date:string, id:number){
    this.ventadetalleProvider.getVentaDetalles(date,id)
    .then(data => {
    this.ventas_detalle = JSON.parse(JSON.stringify(data));
    console.log(this.ventas_detalle);
    });
  }

  saveVentaDetalle(){
    this.ventay = JSON.parse(localStorage.getItem("ventasy"));
    this.venta_detalle.VentaDetalle_Ventas = this.ventay.Ventas_Id;

    this.ventadetalleProvider.addVentaDetalle(this.venta_detalle).then((result) => {
      this.getDetalle(this.ventay.Ventas_Fecha,this.ventay.Ventas_Id);
      console.log(this.totalx);
    }, (err)=>{

    });
  }

  getProductos() {
    this.productosProvider.getProductos()
    .then(data => {
    this.productos = data;
    console.log(this.productos);
    });
  }

  getTotal(){
    this.ventaz = JSON.parse(localStorage.getItem("ventasy"));
    console.log(this.ventaz);
    this.ventadetalleProvider.getTotal(this.ventaz.Ventas_Id)
    .then(data => {
      
      this.obje = data;
      this.ventaz.Ventas_Total = parseFloat(this.obje);

      console.log(this.ventaz.Ventas_Total);
      
       this.ventaProvider.updateVenta(this.ventaz.Ventas_Id,this.ventaz).then((result) => { 
        console.log(result); 
        }, (err) => { 
        console.log(err); 
        }); 

    }); 
  }






}
