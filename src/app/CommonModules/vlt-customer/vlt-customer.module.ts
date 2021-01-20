import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{VltCustomerRoutingModule} from './vlt-customer-routing.module';
import { RouterModule } from '@angular/router';
import {CommonShareModule} from '../common-share/common-share.module';
import { VltCustomerComponent } from './vlt-customer/vlt-customer.component';


@NgModule({
  declarations: [VltCustomerComponent],
  imports: [
    CommonModule,
    VltCustomerRoutingModule,
    RouterModule,
    CommonShareModule
  ]
})
export class VltCustomerModule { }