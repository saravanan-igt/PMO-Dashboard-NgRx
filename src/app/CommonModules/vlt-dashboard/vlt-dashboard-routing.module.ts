import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VltDashboardComponent } from './vlt-dashboard/vlt-dashboard.component';

const routes: Routes = [
    { path: 'vltDashboard', component: VltDashboardComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class VltDashboardRoutingModule { }