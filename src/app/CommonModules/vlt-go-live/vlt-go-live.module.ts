import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{vltGoLiveRoutingModule} from'./vlt-go-live-routing.module';
import { RouterModule } from '@angular/router';
import {CommonShareModule} from '../common-share/common-share.module';
import { VltGoLiveComponent } from './vlt-go-live/vlt-go-live.component';


@NgModule({
  declarations: [VltGoLiveComponent ],
  imports: [
    CommonModule,
    vltGoLiveRoutingModule,
    RouterModule,
    CommonShareModule

  ]
})
export class VltGoLiveModule { }