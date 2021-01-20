import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LotteryGoLiveCalenderRoutingModule } from './lottery-go-live-calender-routing.module';
import {CommonShareModule} from '../common-share/common-share.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LotteryGoLiveCalenderRoutingModule,
    CommonShareModule
  ]
})
export class LotteryGoLiveCalenderModule { }
