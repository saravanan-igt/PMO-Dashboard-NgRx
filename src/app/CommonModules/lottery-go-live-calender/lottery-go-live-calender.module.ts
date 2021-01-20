import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LotteryGoLiveCalenderRoutingModule } from './lottery-go-live-calender-routing.module';
import { GoLiveComponent } from './go-live.component';
import { CommonShareModule } from '../../common-share/common-share.module';
import { MaterialModule } from "src/app/shared/material-module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
@NgModule({
  declarations: [GoLiveComponent],
  imports: [
    CommonModule,
    LotteryGoLiveCalenderRoutingModule,CommonShareModule,MaterialModule,NgbModule
  ]
})
export class LotteryGoLiveCalenderModule { }
