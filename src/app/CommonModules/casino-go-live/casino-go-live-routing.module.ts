import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamingGoLiveComponent } from './gaming-go-live.component';

const routes: Routes = [
  {path:'',component: GamingGoLiveComponent}
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasinoGoLiveRoutingModule { }
