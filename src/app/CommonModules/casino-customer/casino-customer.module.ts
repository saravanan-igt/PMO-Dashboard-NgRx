import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCustomerComponent } from './game-customer.component';
import { CasinoCustomerRoutingModule } from './casino-customer-routing.module';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "src/app/shared/material-module";
import { CommonShareModule } from '../../common-share/common-share.module';


@NgModule({
  declarations: [GameCustomerComponent],
  imports: [
    CommonModule,
    CasinoCustomerRoutingModule,NgbModule,MaterialModule,CommonShareModule
  ]
})
export class CasinoCustomerModule { }



