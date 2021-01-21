/*
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RichTextEditorAllModule } from "@syncfusion/ej2-angular-richtexteditor";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "./shared/material-module";
import { ParticlesModule } from "angular-particle";
//import { LotteryDashboardComponent } from "./shared/components/lottery-dashboard/lottery-dashboard.component";
import { AmountPipe } from "./pipes/amount.pipe";
import { HttpClientModule } from "@angular/common/http";
import { LoaderService } from "./services/loader.service";
import { CommonService } from "./services/common.service";
import { PageLoaderService } from "./services/page-loader.service";
import { HTTP_INTERCEPTORS, HttpClient } from "@angular/common/http";
import { LoaderInterceptor } from "./loader.interceptor";
import { NgxEchartsModule } from "ngx-echarts";
// import { LoginComponent } from "./login/login.component";
import { ErrorInterceptor } from "./_helpers";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { DataEffects } from "./Store/data.effects";
import { DataReducer } from "./Store/data.reducer";
// import { DcFormComponent } from "./dc-form/dc-form.component";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { LotteryDashboardModule } from "./CommonModules/lottery-dashboard/lottery-dashboard.module";
import { LotteryServiceDeliveryModule } from "./CommonModules/lottery-service-delivery/lottery-service-delivery.module";
import { LotterySystemDeliveryModule } from "./CommonModules/lottery-system-delivery/lottery-system-delivery.module";
import { LotteryRnDModule } from "./CommonModules/lottery-rn-d/lottery-rn-d.module";
import { LotteryGoLiveCalenderModule } from "./CommonModules/lottery-go-live-calender/lottery-go-live-calender.module";
import { LoginModule } from "./CommonModules/login/login.module";
import { CasinoDashboardModule } from "./CommonModules/casino-dashboard/casino-dashboard.module";
import { CasinoSdModule } from "./CommonModules/casino-sd/casino-sd.module";
import { CasinoRndModule } from "./CommonModules/casino-rnd/casino-rnd.module";
import { CasinoGoLiveModule } from "./CommonModules/casino-go-live/casino-go-live.module";
import { VltCustomerModule } from "./CommonModules/vlt-customer/vlt-customer.module";
import { VltGoLiveModule } from "./CommonModules/vlt-go-live/vlt-go-live.module";
import { VltSdModule } from "./CommonModules/vlt-sd/vlt-sd.module";
import { VltDashboardModule } from "./CommonModules/vlt-dashboard/vlt-dashboard.module";
import { VltRndModule } from "./CommonModules/vlt-rnd/vlt-rnd.module";
import{CommonShareModule}from "./CommonModules/common-share/common-share.module";
*/


import { NgModule } from "@angular/core";
import {CommonShareModule} from 'src/app/CommonModules/common-share/common-share.module';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { DashboardComponent } from "./shared/components/dashboard/dashboard.component";
// import { RndComponent } from "./shared/components/rnd/rnd.component";
// import { GameDashboardComponent } from "./CommonModules/casino-dashboard/game-dashboard.component";
// import { GameCustomerComponent } from "./CommonModules/casino-sd/game-customer.component";
// import { GameRndComponent } from "./CommonModules/casino-rnd/game-rnd.component";
import { LoaderComponent } from "./shared/loader/loader.component";
// import { GoLiveComponent } from "./shared/components/go-live/go-live.component";
// import { GoLiveCalendarCompoent } from "./shared/components/go-live-calendar/go-live-calendar.component";
// import { ProjectCardComponent } from "./shared/utility/project-card/project-card.component";
// import { ProjectCategoryComponent } from "./charts/project-category/project-category.component";
// import { BudgetChartComponent } from "./charts/budget-chart/budget-chart.component";
// import { BudgetBarChartComponent } from "./charts/budget-bar-chart/budget-bar-chart.component";
// import { GamingGoLiveComponent } from "./CommonModules/casino-go-live/gaming-go-live.component";
// import { VltDashboardComponent } from "./CommonModules/vlt-dashboard/vlt-dashboard.component";
// import { VltCustomerComponent } from "./CommonModules/vlt-customer/vlt-customer.component";
// import { VltRndComponent } from "./CommonModules/vlt-rnd/vlt-rnd.component";
// import { VltGoLiveComponent } from "./CommonModules/vlt-go-live/vlt-go-live.component";
// import { LotterySDComponent } from "./shared/components/lottery-sd/lottery-sd.component";
// import { LotterySVComponent } from "./shared/components/lottery-sv/lottery-sv.component";
// import { ForecastChartComponent } from "./charts/forecast-chart/forecast-chart.component";
// import { VltSDComponent } from "./CommonModules/vlt-sd/vlt-sd.component";
import { AboutComponent } from "./about/about.component";
// import { LotteryDashboardComponent } from "./shared/components/lottery-dashboard/lottery-dashboard.component";
// import { LoginModule } from "./CommonModules/login/login.module";
import { LoginComponent } from "./login/login.component";

// import { HttpClientModule } from "@angular/common/http";
import { LoaderService } from "./services/loader.service";
import { CommonService } from "./services/common.service";
import { PageLoaderService } from "./services/page-loader.service";
import { LoaderInterceptor } from "./loader.interceptor";
import { ErrorInterceptor } from "./_helpers";
// import { EffectsModule } from "@ngrx/effects";
// import { StoreModule } from "@ngrx/store";
// import { DataEffects } from "./Store/data.effects";
// import { DataReducer } from "./Store/data.reducer";
import { HTTP_INTERCEPTORS, HttpClient } from "@angular/common/http";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    // LotteryDashboardComponent,
    //AmountPipe,
    // RndComponent,
    // GameDashboardComponent,
    // GameCustomerComponent,
    // GameRndComponent,
    LoaderComponent,
    // GoLiveComponent,
    // GoLiveCalendarComponent,
    // ProjectCardComponent,
    // ProjectCategoryComponent,
    // BudgetChartComponent,
    // BudgetBarChartComponent,
    // GamingGoLiveComponent,
    // VltDashboardComponent,
    // VltCustomerComponent,
    // VltRndComponent,
    // VltGoLiveComponent,
    // LotterySDComponent,
    // LotterySVComponent,
    // ForecastChartComponent,
    // VltSDComponent,
    LoginComponent,
    // DcFormComponent,
    // AboutComponent,
  ],
  imports: [
    CommonShareModule,
    // LotteryDashboardModule,
    // LotteryServiceDeliveryModule,
    // LotterySystemDeliveryModule ,
    // LotteryRnDModule,
    // LotteryGoLiveCalenderModule,
    // CasinoDashboardModule,
    // CasinoSdModule,
    // CasinoRndModule,
    // CasinoGoLiveModule,
    // VltCustomerModule,
    // VltGoLiveModule,
    // VltSdModule,
    // VltDashboardModule,
    // VltRndModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //ReactiveFormsModule,
    //FormsModule,
    // RichTextEditorAllModule,
   // NgbModule,
    // MaterialModule,
    // ParticlesModule,
    // HttpClientModule,
    // NgxEchartsModule,
   
    // PerfectScrollbarModule,
    // LoginModule,
    CommonShareModule,
    

   /* StoreModule.forRoot({ data: DataReducer }),
    EffectsModule.forRoot([DataEffects]),
    */

  ],
  providers: [

    LoaderService,
    PageLoaderService,
    CommonService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    
  ],
  bootstrap: [AppComponent],
  entryComponents: [AboutComponent],
})
export class AppModule {}
