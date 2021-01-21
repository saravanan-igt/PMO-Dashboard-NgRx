import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VltRndComponent } from './vlt-rnd.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "src/app/shared/material-module";
import { CommonShareModule } from '../../common-share/common-share.module';
import { VltRndRoutingModule } from './vlt-rnd-routing.module';


@NgModule({
  declarations: [VltRndComponent],
  imports: [
    CommonModule,
    VltRndRoutingModule,CommonShareModule,NgbModule,MaterialModule
  ]
})
export class VltRndModule { }
