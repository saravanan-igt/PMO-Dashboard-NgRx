import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VltGoLiveComponent } from './vlt-go-live.component';

const routes: Routes = [
    { path: 'vltGoLive', component: VltGoLiveComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class vltGoLiveRoutingModule { }