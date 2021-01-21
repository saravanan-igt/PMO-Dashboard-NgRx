import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VltDashboardComponent } from './vlt-dashboard.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "src/app/shared/material-module";
import { CommonShareModule } from '../../common-share/common-share.module';

import { VltDashboardRoutingModule } from './vlt-dashboard-routing.module';


@NgModule({
  declarations: [VltDashboardComponent],
  imports: [
    CommonModule,
    VltDashboardRoutingModule,CommonShareModule,NgbModule,MaterialModule
  ]
})
export class VltDashboardModule { }
