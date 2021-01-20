import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LotteryDashboardRoutingModule } from './lottery-dashboard-routing.module';
import { LotteryDashboardComponent } from './lottery-dashboard.component';
import { CommonShareModule } from '../../common-share/common-share.module';
import { MaterialModule } from "src/app/shared/material-module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
@NgModule({
  declarations: [LotteryDashboardComponent,
  ],
  imports: [
    CommonModule,
    LotteryDashboardRoutingModule,CommonShareModule,MaterialModule,NgbModule
  ]
})
export class LotteryDashboardModule { }
