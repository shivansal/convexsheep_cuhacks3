import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BikeNowPage } from './bike-now';

@NgModule({
  declarations: [
    BikeNowPage,
  ],
  imports: [
    IonicPageModule.forChild(BikeNowPage),
  ],
  exports: [
    BikeNowPage
  ]
})
export class BikeNowPageModule {}
