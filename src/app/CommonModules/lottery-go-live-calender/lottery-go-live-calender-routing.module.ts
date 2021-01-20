import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoLiveComponent } from './go-live.component';


const routes: Routes = [
  {
    path:'',
    component:GoLiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LotteryGoLiveCalenderRoutingModule { }
