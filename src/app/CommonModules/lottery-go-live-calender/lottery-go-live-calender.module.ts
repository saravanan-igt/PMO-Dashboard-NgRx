import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LotteryGoLiveCalenderRoutingModule } from './lottery-go-live-calender-routing.module';
import { GoLiveComponent } from './go-live.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../../shared/material-module";
// import { GoLiveCalendarComponent } from "src/app/shared/components/go-live-calendar/go-live-calendar.component";
@NgModule({
  declarations: [GoLiveComponent],
  imports: [
    CommonModule,
    LotteryGoLiveCalenderRoutingModule,NgbModule,MaterialModule,
  ]
})
export class LotteryGoLiveCalenderModule { }
