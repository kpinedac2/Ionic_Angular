import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateProveedorPage } from './create-proveedor';

@NgModule({
  declarations: [
    CreateProveedorPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateProveedorPage),
  ],
})
export class CreateProveedorPageModule {}
