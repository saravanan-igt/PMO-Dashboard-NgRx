import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamingGoLiveComponent } from './gaming-go-live.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "src/app/shared/material-module";
import { CommonShareModule } from '../../common-share/common-share.module';
import { CasinoGoLiveRoutingModule } from './casino-go-live-routing.module';


@NgModule({
  declarations: [GamingGoLiveComponent],
  imports: [
    CommonModule,
    CasinoGoLiveRoutingModule,NgbModule,CommonShareModule,MaterialModule
  ]
})
export class CasinoGoLiveModule { }
