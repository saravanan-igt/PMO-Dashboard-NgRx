import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { GameDashboardComponent } from '../shared/components/game-dashboard/game-dashboard.component';
import { GameDashboardComponent  } from 'src/app/CommonModules/casino-dashboard/game-dashboard/game-dashboard.component';

const routes: Routes = [
    { path: 'gameDashboard', component: GameDashboardComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CasinoDashboardRoutingModule { }