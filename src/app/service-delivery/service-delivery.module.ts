import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceDeliveryRoutingModule } from './service-delivery-routing.module';
import { RouterModule } from '@angular/router';
import { LotterySVComponent } from '../shared/components/lottery-sv/lottery-sv.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServiceDeliveryRoutingModule,
    RouterModule
  ]
})
export class ServiceDeliveryModule { }
