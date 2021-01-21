import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasinoRndRoutingModule } from './casino-rnd-routing.module';
import { GameRndComponent } from './game-rnd.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "src/app/shared/material-module";
import { CommonShareModule } from '../../common-share/common-share.module';


@NgModule({
  declarations: [GameRndComponent],
  imports: [
    CommonModule,
    CasinoRndRoutingModule,NgbModule,MaterialModule,CommonShareModule
  ]
})
export class CasinoRndModule { }
