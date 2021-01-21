import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VltDashboardComponent } from './vlt-dashboard.component';

const routes: Routes = [
  {path:'',component: VltDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VltDashboardRoutingModule { }
