import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsuarioDetallePage } from './usuario-detalle';

@NgModule({
  declarations: [
    UsuarioDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(UsuarioDetallePage),
  ],
})
export class UsuarioDetallePageModule {}
