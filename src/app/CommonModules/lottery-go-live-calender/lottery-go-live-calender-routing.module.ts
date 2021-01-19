import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoLiveComponent } from 'src/app/shared/components/go-live/go-live.component';


const routes: Routes = [
  {
    path:'goLive',
    component:GoLiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LotteryGoLiveCalenderRoutingModule { }
