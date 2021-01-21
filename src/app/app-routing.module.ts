import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./shared/components/dashboard/dashboard.component";

import { RndComponent } from "./shared/components/rnd/rnd.component";
import { GameDashboardComponent } from "./CommonModules/casino-dashboard/game-dashboard.component";
import { GameCustomerComponent } from "./CommonModules/casino-sd/game-customer.component";
import { GameRndComponent } from "./CommonModules/casino-rnd/game-rnd.component";
import { GoLiveComponent } from "./shared/components/go-live/go-live.component";
import { GamingGoLiveComponent } from "./CommonModules/casino-go-live/gaming-go-live.component";

import { VltDashboardComponent } from "./CommonModules/vlt-dashboard/vlt-dashboard.component";
import { VltCustomerComponent } from "./CommonModules/vlt-customer/vlt-customer.component";
import { VltRndComponent } from "./CommonModules/vlt-rnd/vlt-rnd.component";
import { VltSDComponent } from "./CommonModules/vlt-sd/vlt-sd.component";
import { VltGoLiveComponent } from "./CommonModules/vlt-go-live/vlt-go-live.component";

import { LotterySDComponent } from "./shared/components/lottery-sd/lottery-sd.component";
import { LotterySVComponent } from "./shared/components/lottery-sv/lottery-sv.component";

import { LoginComponent } from "./login/login.component";
import { DcFormComponent } from "./dc-form/dc-form.component";
import { AuthGuard } from "./_helpers";
import { LotteryDashboardComponent } from "./shared/components/lottery-dashboard/lottery-dashboard.component";

const routes: Routes = [
  {
    path: "home",
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  // {
  //   path: "lotteryDashboard",
  //   component: LotteryDashboardComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path:"lotteryDashboard",
  //   loadChildren:'./lottery/lottery.module#LotteryModule',
  //   canActivate: [AuthGuard]
  // },


  //{
   // path:"lotteryDashboard",
    //loadChildren:'./CommonModules/lottery-dashboard/lottery-dashboard.module#LotteryDashboardModule',
    //canActivate:[AuthGuard]
  //},
  // {
  //   path: "lotterySd",
  //   component: LotterySDComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path:"lotterySd",
  //   loadChildren:'./system-delivery/system-delivery.module#SystemDeliveryModule',
  //   canActivate: [AuthGuard]
  // },


  /*
  {
    path:"lotterySv",
    loadChildren:'./CommonModules/lottery-service-delivery/lottery-service-delivery.module#LotteryServiceDeliveryModule',
    canActivate:[AuthGuard]
  },
  { 
    path:"lotterySd",
    loadChildren:"./CommonModules/lottery-system-delivery/lottery-system-delivery.module#LotterySystemDeliveryModule",
    canActivate:[AuthGuard]
  },
  */

  // {
  //   path: "lotterySv",
  //   component: LotterySVComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path:"lotterySv",
  //   loadChildren:'./service-delivery/service-delivery.module#ServiceDeliveryModule',
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: "rndDashboard",
  //   component: RndComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path:"rndDashboard",
  //   loadChildren:'./rand-d/rand-d.module#RandDModule',
  //   canActivate: [AuthGuard],
  // },

  /*
  {
    path:"rndDashboard",
    loadChildren:'./CommonModules/lottery-rn-d/lottery-rn-d.module#LotteryRnDModule',
    canActivate:[AuthGuard]
  },
  */

  {path: 'game-dashboard', 
  loadChildren: () => import('./CommonModules/casino-dashboard/casino-dashboard.module').then(m => m.CasinoDashboardModule),
  canActivate:[AuthGuard],
  },

  /*
{path: 'game-go-live', 
loadChildren: () => import('./CommonModules/casino-go-live/casino-go-live.module').then(m => m.CasinoGoLiveModule),
canActivate:[AuthGuard],
},

{path: 'game-rnd', 
loadChildren: () => import('./CommonModules/casino-rnd/casino-rnd.module').then(m => m.CasinoRndModule),
canActivate:[AuthGuard],
},

{path: 'game-customer', 
loadChildren: () => import('./CommonModules/casino-sd/casino-sd.module').then(m => m.CasinoSdModule),
canActivate:[AuthGuard],
},


{path: 'vlt-customer', 
loadChildren: () => import('./CommonModules/vlt-customer/vlt-customer.module').then(m => m.VltCustomerModule),
canActivate:[AuthGuard],
},

{path: 'vlt-dashboard', 
loadChildren: () => import('./CommonModules/vlt-dashboard/vlt-dashboard.module').then(m => m.VltDashboardModule),
canActivate:[AuthGuard],
},

{path: 'vlt-go-live', 
loadChildren: () => import('./CommonModules/vlt-go-live/vlt-go-live.module').then(m => m.VltGoLiveModule),
canActivate:[AuthGuard],
},

{path: 'vlt-rnd', 
loadChildren: () => import('./CommonModules/vlt-rnd/vlt-rnd.module').then(m => m.VltRndModule),
canActivate:[AuthGuard],
},

{path: 'vlt-sv', 
loadChildren: () => import('./CommonModules/vlt-sd/vlt-sd.module').then(m => m.VltSdModule),
canActivate:[AuthGuard],
},
*/


  /*
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
  */
  // {
  //   path: "goLive",
  //   component: GoLiveComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path:"goLive",
  //   loadChildren:'./golivecalender/golivecalender.module#GolivecalenderModule',
  //   canActivate: [AuthGuard]
  // },
 /* {
    path:"goLive",
    loadChildren:'./CommonModules/lottery-go-live-calender/lottery-go-live-calender.module#LotteryGoLiveCalenderModule',
    canActivate: [AuthGuard],
  },
  */
 /*{
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
  */
  
  {
    path:"login",
    loadChildren:'./CommonModules/login/login.module#LoginModule',
  },
  /*
  {
    path:"dcForm",
    loadChildren:'./CommonModules/dcform/dcform.module#DcformModule',
    canActivate: [AuthGuard]
  },
  */
  

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
