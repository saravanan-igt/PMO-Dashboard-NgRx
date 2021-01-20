import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LotterySVComponent } from './lottery-sv.component';
import { LotteryServiceDeliveryRoutingModule } from './lottery-service-delivery-routing.module';
import { CommonShareModule } from '../../common-share/common-share.module';
import { MaterialModule } from "src/app/shared/material-module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [LotterySVComponent],
  imports: [
    CommonModule,
    LotteryServiceDeliveryRoutingModule,CommonShareModule,MaterialModule,NgbModule
  ]
})
export class LotteryServiceDeliveryModule { }
