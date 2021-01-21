import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VltSDComponent } from './vlt-sd.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "src/app/shared/material-module";
import { CommonShareModule } from '../../common-share/common-share.module';
import { VltSdRoutingModule } from './vlt-sd-routing.module';


@NgModule({
  declarations: [VltSDComponent],
  imports: [
    CommonModule,
    VltSdRoutingModule,NgbModule,CommonShareModule,MaterialModule
  ]
})
export class VltSdModule { }
