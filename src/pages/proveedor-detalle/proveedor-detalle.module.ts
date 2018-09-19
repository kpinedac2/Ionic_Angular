import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProveedorDetallePage } from './proveedor-detalle';

@NgModule({
  declarations: [
    ProveedorDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(ProveedorDetallePage),
  ],
})
export class ProveedorDetallePageModule {}
