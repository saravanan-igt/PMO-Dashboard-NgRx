import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameRndComponent } from './game-rnd.component';

const routes: Routes = [
  {path:'',component: GameRndComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasinoRndRoutingModule { }
