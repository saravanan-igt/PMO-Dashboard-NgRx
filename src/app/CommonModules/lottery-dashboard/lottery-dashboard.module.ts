import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LotteryDashboardRoutingModule } from './lottery-dashboard-routing.module';
import {CommonShareModule} from '../common-share/common-share.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LotteryDashboardRoutingModule,
    CommonShareModule
  ]
})
export class LotteryDashboardModule { }
