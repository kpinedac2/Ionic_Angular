import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateUsuarioPage } from './create-usuario';

@NgModule({
  declarations: [
    CreateUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateUsuarioPage),
  ],
})
export class CreateUsuarioPageModule {}
