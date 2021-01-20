import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{vltSdRoutingModule} from'./vlt-sd-routing.module';
import { RouterModule } from '@angular/router';
import {CommonShareModule} from '../common-share/common-share.module';
import { VltSDComponent } from '../vlt-rnd/vlt-rnd/vlt-sd/vlt-sd.component';

@NgModule({
  declarations: [VltSDComponent],
  imports: [
    CommonModule,
    vltSdRoutingModule,
    RouterModule,
    CommonShareModule
  ]
})
export class VltSdModule { }

