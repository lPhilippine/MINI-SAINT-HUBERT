import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestDriverPage } from './request-driver';

@NgModule({
  declarations: [
    RequestDriverPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestDriverPage),
  ],
})
export class RequestDriverPageModule {}
