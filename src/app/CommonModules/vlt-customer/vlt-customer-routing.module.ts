import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VltCustomerComponent } from './vlt-customer.component';

const routes: Routes = [
  {path:'',component: VltCustomerComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VltCustomerRoutingModule { }
