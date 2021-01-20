import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VltCustomerComponent } from './vlt-customer/vlt-customer.component';

const routes: Routes = [
    { path: 'vltCustomer', component: VltCustomerComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class VltCustomerRoutingModule { }