import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { Camera } from '@ionic-native/camera';
import { CardIO } from '@ionic-native/card-io';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppState } from './app.global';
import { ClientesProvider } from '../providers/clientes/clientes';
import { EmpleadosProvider } from '../providers/empleados/empleados';
import { UsuariosProvider } from '../providers/usuarios/usuarios';
import { MarcasProvider } from '../providers/marcas/marcas';
import { TipoproductoProvider } from '../providers/tipoproducto/tipoproducto';
import { ProveedorProvider } from '../providers/proveedor/proveedor';
import { ProductosProvider } from '../providers/productos/productos';

//Pages
import {UpdateClientesPage} from '../pages/update-clientes/update-clientes'
import {UpdateEmpleadosPage} from '../pages/update-empleados/update-empleados'
import {UpdateUsuarioPage} from '../pages/update-usuario/update-usuario'
import {UpdateMarcaPage} from '../pages/update-marca/update-marca'
import {UpdateTipoproductosPage} from '../pages/update-tipoproductos/update-tipoproductos'
import {UpdateProveedoresPage} from '../pages/update-proveedores/update-proveedores'
import {UpdateExistenciaPage} from '../pages/update-existencia/update-existencia'
//UpdateProductosPage
import {UpdateProductosPage} from '../pages/update-productos/update-productos'
import { ExistenciasProvider } from '../providers/existencias/existencias';
import { VentaProvider } from '../providers/venta/venta';
import { VentadetalleProvider } from '../providers/ventadetalle/ventadetalle';
import { FacturaProvider } from '../providers/factura/factura';

@NgModule({
  declarations: [ 
    MyApp,
    UpdateClientesPage,
    UpdateEmpleadosPage,
    UpdateUsuarioPage,
    UpdateMarcaPage,
    UpdateTipoproductosPage,
    UpdateProveedoresPage,
    UpdateProductosPage,
    UpdateExistenciaPage
  ],
  imports: [
    HttpClientModule,
    IonicModule.forRoot(MyApp),
     BrowserModule,
     FormsModule,
     ReactiveFormsModule,
     HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UpdateClientesPage,
    UpdateEmpleadosPage,
    UpdateUsuarioPage,
    UpdateMarcaPage,
    UpdateTipoproductosPage,
    UpdateProveedoresPage,
    UpdateProductosPage,
    UpdateExistenciaPage
  ],
  providers: [ StatusBar,AppState,
    SplashScreen, Camera, CardIO,  { provide: ErrorHandler, useClass: IonicErrorHandler },
    ClientesProvider,
    EmpleadosProvider,
    UsuariosProvider,
    MarcasProvider,
    TipoproductoProvider,
    ProveedorProvider,
    ProductosProvider,
    ExistenciasProvider,
    VentaProvider,
    VentadetalleProvider,
    FacturaProvider]
})
export class AppModule { }
