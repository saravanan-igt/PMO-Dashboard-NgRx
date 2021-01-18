import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LotterySDComponent } from '../shared/components/lottery-sd/lottery-sd.component';


const routes: Routes = [
  {
    path:"lotterySd",
    component:LotterySDComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemDeliveryRoutingModule { }
