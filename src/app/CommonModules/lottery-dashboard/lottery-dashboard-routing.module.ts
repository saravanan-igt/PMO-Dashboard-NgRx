import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LotteryDashboardComponent } from 'src/app/shared/components/lottery-dashboard/lottery-dashboard.component';


const routes: Routes = [
  {path:'lotteryDashboard',
  component:LotteryDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LotteryDashboardRoutingModule { }
