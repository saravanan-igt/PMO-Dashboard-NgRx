import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameCustomerComponent } from './game-customer.component';

const routes: Routes = [
  {path:'',component: GameCustomerComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasinoCustomerRoutingModule { }






