import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateProductoPage } from './create-producto';

@NgModule({
  declarations: [
    CreateProductoPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateProductoPage),
  ],
})
export class CreateProductoPageModule {}
