import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LotteryServiceDeliveryRoutingModule } from './lottery-service-delivery-routing.module';
import {CommonShareModule} from '../common-share/common-share.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LotteryServiceDeliveryRoutingModule,
    CommonShareModule
  ]
})
export class LotteryServiceDeliveryModule { }
