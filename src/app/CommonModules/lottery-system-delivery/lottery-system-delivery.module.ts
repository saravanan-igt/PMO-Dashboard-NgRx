import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LotterySystemDeliveryRoutingModule } from './lottery-system-delivery-routing.module';
import {CommonShareModule} from '../common-share/common-share.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LotterySystemDeliveryRoutingModule,
    CommonShareModule
  ]
})
export class LotterySystemDeliveryModule { }
