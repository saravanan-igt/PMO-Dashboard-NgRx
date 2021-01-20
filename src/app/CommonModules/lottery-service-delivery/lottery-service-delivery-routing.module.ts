import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LotterySVComponent } from './lottery-sv.component';


const routes: Routes = [
  {path:'',
component:LotterySVComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LotteryServiceDeliveryRoutingModule { }
