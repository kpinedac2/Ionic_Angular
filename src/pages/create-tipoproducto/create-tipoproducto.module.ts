import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateTipoproductoPage } from './create-tipoproducto';

@NgModule({
  declarations: [
    CreateTipoproductoPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateTipoproductoPage),
  ],
})
export class CreateTipoproductoPageModule {}
