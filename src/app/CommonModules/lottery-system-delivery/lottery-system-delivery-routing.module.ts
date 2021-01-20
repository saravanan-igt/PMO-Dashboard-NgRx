import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LotterySDComponent } from './lottery-sd.component';


const routes: Routes = [
  {
    path:'',
    component:LotterySDComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LotterySystemDeliveryRoutingModule { }
