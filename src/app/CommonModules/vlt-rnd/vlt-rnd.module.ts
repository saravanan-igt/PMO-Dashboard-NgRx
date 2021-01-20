import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{vltRndRoutingModule} from'./vlt-rnd-routing.module';
import { RouterModule } from '@angular/router';
import {CommonShareModule} from '../common-share/common-share.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    vltRndRoutingModule,
    RouterModule,
    CommonShareModule
  ]
})
export class VltRndModule { }
