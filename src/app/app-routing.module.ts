import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./shared/components/dashboard/dashboard.component";
import { LotteryDashboardComponent } from "./shared/components/lottery-dashboard/lottery-dashboard.component";
import { RndComponent } from "./shared/components/rnd/rnd.component";
import { GameDashboardComponent } from "./shared/components/game-dashboard/game-dashboard.component";
import { GameCustomerComponent } from "./shared/components/game-customer/game-customer.component";
import { GameRndComponent } from "./shared/components/game-rnd/game-rnd.component";
import { GoLiveComponent } from "./shared/components/go-live/go-live.component";
import { GamingGoLiveComponent } from "./shared/components/gaming-go-live/gaming-go-live.component";

import { VltDashboardComponent } from "./shared/components/vlt-dashboard/vlt-dashboard.component";
import { VltCustomerComponent } from "./shared/components/vlt-customer/vlt-customer.component";
import { VltRndComponent } from "./shared/components/vlt-rnd/vlt-rnd.component";
import { VltSDComponent } from "./shared/components/vlt-sd/vlt-sd.component";
import { VltGoLiveComponent } from "./shared/components/vlt-go-live/vlt-go-live.component";

import { LotterySDComponent } from "./shared/components/lottery-sd/lottery-sd.component";
import { LotterySVComponent } from "./shared/components/lottery-sv/lottery-sv.component";

import { LoginComponent } from "./login/login.component";
import { DcFormComponent } from "./dc-form/dc-form.component";
import { AuthGuard } from "./_helpers";

const routes: Routes = [
  {
    path: "home",
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "lotteryDashboard",
    component: LotteryDashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "lotterySd",
    component: LotterySDComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "lotterySv",
    component: LotterySVComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "rndDashboard",
    component: RndComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "gameDashboard",
    component: GameDashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "gameCustomer",
    component: GameCustomerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "gameRnd",
    component: GameRndComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "goLive",
    component: GoLiveComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "gameGoLive",
    component: GamingGoLiveComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "vltDashboard",
    component: VltDashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "vltCustomer",
    component: VltCustomerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "vltRnd",
    component: VltRndComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "vltSv",
    component: VltSDComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "vltGoLive",
    component: VltGoLiveComponent,
    canActivate: [AuthGuard],
  },
  { path: "dcForm", component: DcFormComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },

  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
    }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
