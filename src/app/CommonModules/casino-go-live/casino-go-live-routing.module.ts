import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamingGoLiveComponent } from 'src/app/CommonModules/casino-go-live/gaming-go-live.component';


const routes: Routes = [
    { path: 'gameGoLive', component: GamingGoLiveComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CasinoGoLiveRoutingModule { }