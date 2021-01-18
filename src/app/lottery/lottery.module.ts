import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LotteryRoutingModule } from './lottery-routing.module';
import { LotteryDashboardComponent } from '../shared/components/lottery-dashboard/lottery-dashboard.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LotteryRoutingModule,
    RouterModule
  ],
  exports:[]
})
export class LotteryModule { }
