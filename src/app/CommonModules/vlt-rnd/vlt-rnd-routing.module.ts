import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VltRndComponent } from './vlt-rnd.component';

const routes: Routes = [
    { path: 'vltRnd', component: VltRndComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class vltRndRoutingModule { }