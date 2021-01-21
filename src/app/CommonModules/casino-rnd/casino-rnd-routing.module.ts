import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameRndComponent } from 'src/app/CommonModules/casino-rnd/game-rnd.component';


const routes: Routes = [
    { path: 'gameRnd', component: GameRndComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class CasinoRndRoutingModule { }