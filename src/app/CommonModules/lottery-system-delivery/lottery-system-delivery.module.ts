import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LotterySDComponent } from './lottery-sd.component';
import { LotterySystemDeliveryRoutingModule } from './lottery-system-delivery-routing.module';
import { CommonShareModule } from '../../common-share/common-share.module';
import { MaterialModule } from "src/app/shared/material-module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [LotterySDComponent],
  imports: [
    CommonModule,
    LotterySystemDeliveryRoutingModule,CommonShareModule,MaterialModule,NgbModule
  ]
})
export class LotterySystemDeliveryModule { }
