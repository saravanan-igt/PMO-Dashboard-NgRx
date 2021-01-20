import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDashboardComponent } from 'src/app/CommonModules/casino-dashboard/game-dashboard/game-dashboard.component';
import{CasinoDashboardRoutingModule} from'./casino-dashboard-routing.module';
import { RouterModule } from '@angular/router';
import{CommonShareModule} from '../common-share/common-share.module';




@NgModule({
  declarations: [GameDashboardComponent],
  imports: [
    CommonModule,
    CasinoDashboardRoutingModule,
    RouterModule,
    CasinoDashboardModule
  ]
})
export class CasinoDashboardModule { }