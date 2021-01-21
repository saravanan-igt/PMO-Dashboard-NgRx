import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VltGoLiveComponent } from './vlt-go-live.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "src/app/shared/material-module";
import { CommonShareModule } from '../../common-share/common-share.module';
import { VltGoLiveRoutingModule } from './vlt-go-live-routing.module';


@NgModule({
  declarations: [VltGoLiveComponent],
  imports: [
    CommonModule,
    VltGoLiveRoutingModule,NgbModule,MaterialModule,CommonShareModule
  ]
})
export class VltGoLiveModule { }
