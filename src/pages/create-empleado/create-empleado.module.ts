import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateEmpleadoPage } from './create-empleado';

@NgModule({
  declarations: [
    CreateEmpleadoPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateEmpleadoPage),
  ],
})
export class CreateEmpleadoPageModule {}
