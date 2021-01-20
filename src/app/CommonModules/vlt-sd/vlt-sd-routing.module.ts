import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VltSDComponent } from '../vlt-rnd/vlt-rnd/vlt-sd/vlt-sd.component';

const routes: Routes = [
    { path: 'vltSv', component: VltSDComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class vltSdRoutingModule { }