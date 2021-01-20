import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "src/app/shared/material-module";
import { CommonShareModule } from '../../common-share/common-share.module';
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardModuleRoutingModule,CommonShareModule,NgbModule,MaterialModule
  ],
})
export class DashboardModuleModule { }
