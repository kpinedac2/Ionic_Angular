import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateProductosPage } from './update-productos';

@NgModule({
  declarations: [
    UpdateProductosPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateProductosPage),
  ],
})
export class UpdateProductosPageModule {}
