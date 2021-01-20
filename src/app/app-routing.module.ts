import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// import { DashboardComponent } from "./shared/components/dashboard/dashboard.component";

// import { RndComponent } from "./shared/components/rnd/rnd.component";
// import { GameDashboardComponent } from "./shared/components/game-dashboard/game-dashboard.component";
// import { GameCustomerComponent } from "./shared/components/game-customer/game-customer.component";
// import { GameRndComponent } from "./shared/components/game-rnd/game-rnd.component";
// import { GoLiveComponent } from "./shared/components/go-live/go-live.component";
// import { GamingGoLiveComponent } from "./shared/components/gaming-go-live/gaming-go-live.component";

// import { VltDashboardComponent } from "./shared/components/vlt-dashboard/vlt-dashboard.component";
// import { VltCustomerComponent } from "./shared/components/vlt-customer/vlt-customer.component";
// import { VltRndComponent } from "./shared/components/vlt-rnd/vlt-rnd.component";
// import { VltSDComponent } from "./shared/components/vlt-sd/vlt-sd.component";
// import { VltGoLiveComponent } from "./shared/components/vlt-go-live/vlt-go-live.component";

// import { LotterySDComponent } from "./shared/components/lottery-sd/lottery-sd.component";
// import { LotterySVComponent } from "./shared/components/lottery-sv/lottery-sv.component";

// import { LoginComponent } from "./login/login.component";
// import { DcFormComponent } from "./dc-form/dc-form.component";
import { AuthGuard } from "./_helpers";
// import { LotteryDashboardComponent } from "./shared/components/lottery-dashboard/lottery-dashboard.component";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import('./CommonModules/dashboard-module/dashboard-module.module').then(m => m.DashboardModuleModule),
    canActivate: [AuthGuard],
  },
  {
    path:"lotteryDashboard",
    loadChildren: () => import('./CommonModules/lottery-dashboard/lottery-dashboard.module').then(m => m.LotteryDashboardModule),
    canActivate:[AuthGuard]
  },
  {
    path:"lotterySv",
    loadChildren: () => import('./CommonModules/lottery-service-delivery/lottery-service-delivery.module').then(m => m.LotteryServiceDeliveryModule),
    canActivate:[AuthGuard]
  },
  { 
    path:"lotterySd",
    loadChildren: () => import('./CommonModules/lottery-system-delivery/lottery-system-delivery.module').then(m => m.LotterySystemDeliveryModule),
    canActivate:[AuthGuard]
  },
  {
    path:"rndDashboard",
    loadChildren: () => import('./CommonModules/lottery-rn-d/lottery-rn-d.module').then(m => m.LotteryRnDModule),
    canActivate:[AuthGuard]
  },
  // {
  //   path: "gameDashboard",
  //   component: GameDashboardComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: "gameCustomer",
  //   component: GameCustomerComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: "gameRnd",
  //   component: GameRndComponent,
  //   canActivate: [AuthGuard],
  // },
  {
    path:"goLive",
    loadChildren: () => import('./CommonModules/lottery-go-live-calender/lottery-go-live-calender.module').then(m => m.LotteryGoLiveCalenderModule),
    canActivate: [AuthGuard],
  },
  // {
  //   path: "gameGoLive",
  //   component: GamingGoLiveComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: "vltDashboard",
  //   component: VltDashboardComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: "vltCustomer",
  //   component: VltCustomerComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: "vltRnd",
  //   component: VltRndComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: "vltSv",
  //   component: VltSDComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: "vltGoLive",
  //   component: VltGoLiveComponent,
  //   canActivate: [AuthGuard],
  // },
  {
    path:"login",
    loadChildren: () => import('./CommonModules/login/login.module').then(m => m.LoginModule)
  },
  {
    path:"dcForm",
    loadChildren: () => import('./CommonModules/dcform/dcform.module').then(m => m.DcformModule),
    canActivate: [AuthGuard]
  },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
 
  },
  // canActivate: [AuthGuard],
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
