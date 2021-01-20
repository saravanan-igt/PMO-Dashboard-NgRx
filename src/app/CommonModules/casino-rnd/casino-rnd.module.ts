import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{CasinoRndRoutingModule} from './casino-rnd-routing.module';
import { RouterModule } from '@angular/router';
import { GameRndComponent } from 'src/app/CommonModules/casino-rnd/game-rnd/game-rnd.component';
import{CommonShareModule} from '../common-share/common-share.module';
import { CasinoDashboardModule } from '../casino-dashboard/casino-dashboard.module';

@NgModule({
  declarations: [GameRndComponent ],
  imports: [
    CommonModule,
    CasinoRndRoutingModule,
    RouterModule,
    CommonShareModule
  ]
})
export class CasinoRndModule { }