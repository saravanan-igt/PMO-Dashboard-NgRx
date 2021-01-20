import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LotteryDashboardComponent } from './lottery-dashboard.component';


const routes: Routes = [
  {path:'',
  component:LotteryDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LotteryDashboardRoutingModule { }
