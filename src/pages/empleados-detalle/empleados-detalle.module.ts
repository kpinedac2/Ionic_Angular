import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmpleadosDetallePage } from './empleados-detalle';

@NgModule({
  declarations: [
    EmpleadosDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(EmpleadosDetallePage),
  ],
})
export class EmpleadosDetallePageModule {}
