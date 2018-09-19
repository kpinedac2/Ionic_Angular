import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TipoproductoDetallePage } from './tipoproducto-detalle';

@NgModule({
  declarations: [
    TipoproductoDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(TipoproductoDetallePage),
  ],
})
export class TipoproductoDetallePageModule {}
