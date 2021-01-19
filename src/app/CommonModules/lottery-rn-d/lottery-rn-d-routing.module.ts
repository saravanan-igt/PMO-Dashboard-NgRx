import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RndComponent } from 'src/app/shared/components/rnd/rnd.component';


const routes: Routes = [
  {
    path:'rndDashboard',
    component:RndComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LotteryRnDRoutingModule { }
