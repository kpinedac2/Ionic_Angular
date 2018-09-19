import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarcaDetallePage } from './marca-detalle';

@NgModule({
  declarations: [
    MarcaDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(MarcaDetallePage),
  ],
})
export class MarcaDetallePageModule {}
