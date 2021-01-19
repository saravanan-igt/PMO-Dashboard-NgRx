import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RichTextEditorAllModule } from "@syncfusion/ej2-angular-richtexteditor";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "./shared/material-module";
import { ParticlesModule } from "angular-particle";
import { DashboardComponent } from "./shared/components/dashboard/dashboard.component";
// import { LotteryDashboardComponent } from "./shared/components/lottery-dashboard/lottery-dashboard.component";
import { AmountPipe } from "./pipes/amount.pipe";
import { HttpClientModule } from "@angular/common/http";
import { RndComponent } from "./shared/components/rnd/rnd.component";
import { GameDashboardComponent } from "./shared/components/game-dashboard/game-dashboard.component";
import { GameCustomerComponent } from "./shared/components/game-customer/game-customer.component";
import { GameRndComponent } from "./shared/components/game-rnd/game-rnd.component";
import { LoaderComponent } from "./shared/loader/loader.component";
import { LoaderService } from "./services/loader.service";
import { CommonService } from "./services/common.service";
import { PageLoaderService } from "./services/page-loader.service";
import { HTTP_INTERCEPTORS, HttpClient } from "@angular/common/http";
import { LoaderInterceptor } from "./loader.interceptor";
import { GoLiveComponent } from "./shared/components/go-live/go-live.component";
import { GoLiveCalendarComponent } from "./shared/components/go-live-calendar/go-live-calendar.component";
import { ProjectCardComponent } from "./shared/utility/project-card/project-card.component";
import { NgxEchartsModule } from "ngx-echarts";
import { ProjectCategoryComponent } from "./charts/project-category/project-category.component";
import { BudgetChartComponent } from "./charts/budget-chart/budget-chart.component";
import { BudgetBarChartComponent } from "./charts/budget-bar-chart/budget-bar-chart.component";
import { GamingGoLiveComponent } from "./shared/components/gaming-go-live/gaming-go-live.component";
import { VltDashboardComponent } from "./shared/components/vlt-dashboard/vlt-dashboard.component";
import { VltCustomerComponent } from "./shared/components/vlt-customer/vlt-customer.component";
import { VltRndComponent } from "./shared/components/vlt-rnd/vlt-rnd.component";
import { VltGoLiveComponent } from "./shared/components/vlt-go-live/vlt-go-live.component";
import { LotterySDComponent } from "./shared/components/lottery-sd/lottery-sd.component";
import { LotterySVComponent } from "./shared/components/lottery-sv/lottery-sv.component";
import { ForecastChartComponent } from "./charts/forecast-chart/forecast-chart.component";
import { VltSDComponent } from "./shared/components/vlt-sd/vlt-sd.component";
import { LoginComponent } from "./login/login.component";
import { ErrorInterceptor } from "./_helpers";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { DataEffects } from "./Store/data.effects";
import { DataReducer } from "./Store/data.reducer";
import { DcFormComponent } from "./dc-form/dc-form.component";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { AboutComponent } from "./about/about.component";
import { LotteryDashboardComponent } from "./shared/components/lottery-dashboard/lottery-dashboard.component";
import { LotteryDashboardModule } from "./CommonModules/lottery-dashboard/lottery-dashboard.module";
import { LotteryServiceDeliveryModule } from "./CommonModules/lottery-service-delivery/lottery-service-delivery.module";
import { LotterySystemDeliveryModule } from "./CommonModules/lottery-system-delivery/lottery-system-delivery.module";
import { LotteryRnDModule } from "./CommonModules/lottery-rn-d/lottery-rn-d.module";
import { LotteryGoLiveCalenderModule } from "./CommonModules/lottery-go-live-calender/lottery-go-live-calender.module";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LotteryDashboardComponent,
     AmountPipe,
    RndComponent,
    GameDashboardComponent,
    GameCustomerComponent,
    GameRndComponent,
    LoaderComponent,
    GoLiveComponent,
    GoLiveCalendarComponent,
    ProjectCardComponent,
    ProjectCategoryComponent,
    BudgetChartComponent,
    BudgetBarChartComponent,
    GamingGoLiveComponent,
    VltDashboardComponent,
    VltCustomerComponent,
    VltRndComponent,
    VltGoLiveComponent,
    LotterySDComponent,
    LotterySVComponent,
    ForecastChartComponent,
    VltSDComponent,
    LoginComponent,
    DcFormComponent,
    AboutComponent,
  ],
  imports: [
    LotteryDashboardModule,
    LotteryServiceDeliveryModule,
    LotterySystemDeliveryModule ,
    LotteryRnDModule,
    LotteryGoLiveCalenderModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    RichTextEditorAllModule,
    NgbModule,
    MaterialModule,
    ParticlesModule,
    HttpClientModule,
    NgxEchartsModule,
    NgbModule,
    StoreModule.forRoot({ data: DataReducer }),
    EffectsModule.forRoot([DataEffects]),
    PerfectScrollbarModule,
    
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
