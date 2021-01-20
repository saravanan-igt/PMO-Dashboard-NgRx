import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{CasinoGoLiveRoutingModule} from'./casino-go-live-routing.module';
import { RouterModule } from '@angular/router';
import { GamingGoLiveComponent } from 'src/app/CommonModules/casino-go-live/gaming-go-live/gaming-go-live.component';



@NgModule({
  declarations: [GamingGoLiveComponent ],
  imports: [
    CommonModule,
    CasinoGoLiveRoutingModule,
    RouterModule
  ]
})
export class CasinoGoLiveModule { }