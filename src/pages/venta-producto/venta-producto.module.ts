import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VentaProductoPage } from './venta-producto';

@NgModule({
  declarations: [
    VentaProductoPage,
  ],
  imports: [
    IonicPageModule.forChild(VentaProductoPage),
  ],
})
export class VentaProductoPageModule {}
