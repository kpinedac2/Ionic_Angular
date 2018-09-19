import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateMarcasPage } from './create-marcas';

@NgModule({
  declarations: [
    CreateMarcasPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateMarcasPage),
  ],
})
export class CreateMarcasPageModule {}
