import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{VltDashboardRoutingModule} from'./vlt-dashboard-routing.module';
import { RouterModule } from '@angular/router';
import {CommonShareModule} from '../common-share/common-share.module';
import { VltDashboardComponent } from './vlt-dashboard/vlt-dashboard.component';

@NgModule({
  declarations: [VltDashboardComponent],
  imports: [
    CommonModule,
    VltDashboardRoutingModule,
    RouterModule,
    CommonShareModule
  ]
})
export class VltDashboardModule { }

