import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VltCustomerComponent } from './vlt-customer.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "src/app/shared/material-module";
import { CommonShareModule } from '../../common-share/common-share.module';
import { VltCustomerRoutingModule } from './vlt-customer-routing.module';


@NgModule({
  declarations: [VltCustomerComponent],
  imports: [
    CommonModule,
    VltCustomerRoutingModule,CommonShareModule,MaterialModule,NgbModule
  ]
})
export class VltCustomerModule { }
