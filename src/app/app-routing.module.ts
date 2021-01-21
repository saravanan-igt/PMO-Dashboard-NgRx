import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./_helpers";

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
  {
    path:"gameDashboard",
    loadChildren: () => import('./CommonModules/casino-dashboard/casino-dashboard.module').then(m => m.CasinoDashboardModule),
    canActivate:[AuthGuard]
  },
  {
    path:"gameCustomer",
    loadChildren: () => import('./CommonModules/casino-customer/casino-customer.module').then(m => m.CasinoCustomerModule),
    canActivate:[AuthGuard]
  },

  {
    path:"gameRnd",
    loadChildren: () => import('./CommonModules/casino-rnd/casino-rnd.module').then(m => m.CasinoRndModule),
    canActivate:[AuthGuard]
  },
  
  {
    path:"gameGoLive",
    loadChildren: () => import('./CommonModules/casino-go-live/casino-go-live.module').then(m => m.CasinoGoLiveModule),
    canActivate:[AuthGuard]
  },
  {
    path:"vltDashboard",
    loadChildren: () => import('./CommonModules/vlt-dashboard/vlt-dashboard.module').then(m => m.VltDashboardModule),
    canActivate:[AuthGuard]
  },
  {
    path:"vltCustomer",
    loadChildren: () => import('./CommonModules/vlt-customer/vlt-customer.module').then(m => m.VltCustomerModule),
    canActivate:[AuthGuard]
  },
  {
    path:"vltRnd",
    loadChildren: () => import('./CommonModules/vlt-rnd/vlt-rnd.module').then(m => m.VltRndModule),
    canActivate:[AuthGuard]
  },
  {
    path:"vltGoLive",
    loadChildren: () => import('./CommonModules/vlt-go-live/vlt-go-live.module').then(m => m.VltGoLiveModule),
    canActivate:[AuthGuard]
  },
  {
    path:"vltSv",
    loadChildren: () => import('./CommonModules/vlt-sd/vlt-sd.module').then(m => m.VltSdModule),
    canActivate:[AuthGuard]
  },
  {
    path:"goLive",
    loadChildren: () => import('./CommonModules/lottery-go-live-calender/lottery-go-live-calender.module').then(m => m.LotteryGoLiveCalenderModule),
    canActivate: [AuthGuard],
  },
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
    redirectTo: "/home",
    pathMatch: "full",
    canActivate: [AuthGuard]
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
