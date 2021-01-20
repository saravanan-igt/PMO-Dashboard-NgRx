import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RndComponent } from './rnd.component';
import { LotteryRnDRoutingModule } from './lottery-rn-d-routing.module';
import { CommonShareModule } from '../../common-share/common-share.module';
import { MaterialModule } from "src/app/shared/material-module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [RndComponent],
  imports: [
    CommonModule,
    LotteryRnDRoutingModule,CommonShareModule,MaterialModule,NgbModule
  ]
})
export class LotteryRnDModule { }
