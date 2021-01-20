import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RndComponent } from './rnd.component';


const routes: Routes = [
  {
    path:'',
    component:RndComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LotteryRnDRoutingModule { }
