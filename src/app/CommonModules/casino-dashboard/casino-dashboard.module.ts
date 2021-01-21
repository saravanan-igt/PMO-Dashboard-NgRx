import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDashboardComponent } from './game-dashboard.component';
import { CasinoDashboardRoutingModule } from './casino-dashboard-routing.module';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "src/app/shared/material-module";
import { CommonShareModule } from '../../common-share/common-share.module';

@NgModule({
  declarations: [GameDashboardComponent],
  imports: [
    CommonModule,
    CasinoDashboardRoutingModule,NgbModule,MaterialModule,CommonShareModule
  ]
})
export class CasinoDashboardModule { }
