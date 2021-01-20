import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{CasinoSdRoutingModule} from'./casino-sd-routing.module';
import { RouterModule } from '@angular/router';
import { GameCustomerComponent } from './game-customer/game-customer.component';
import{CommonShareModule} from '../common-share/common-share.module';

@NgModule({
  declarations: [GameCustomerComponent],
  imports: [
    CommonModule,
    CasinoSdRoutingModule,
    RouterModule,
    CommonShareModule

  ]
})
export class CasinoSdModule { }


