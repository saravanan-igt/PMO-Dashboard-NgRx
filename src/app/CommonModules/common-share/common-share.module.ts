/*import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
//import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

*/

import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RichTextEditorAllModule } from "@syncfusion/ej2-angular-richtexteditor";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "src/app/shared/material-module";
import { ParticlesModule } from "angular-particle";
import { AmountPipe } from "src/app/pipes/amount.pipe";
import { HttpClientModule } from "@angular/common/http";
import { LoaderService } from "src/app/services/loader.service";
import { CommonService } from "src/app/services/common.service";
import { PageLoaderService } from "src/app/services/page-loader.service";
import { HTTP_INTERCEPTORS, HttpClient } from "@angular/common/http";
import { LoaderInterceptor } from "src/app/loader.interceptor";
import { NgxEchartsModule } from "ngx-echarts";
import { ErrorInterceptor } from "src/app/_helpers";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { DataEffects } from "src/app/store/data.effects";
import { DataReducer } from "src/app/store/data.reducer";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { LotteryDashboardModule } from "../lottery-dashboard/lottery-dashboard.module";
import { LotteryServiceDeliveryModule } from "../lottery-service-delivery/lottery-service-delivery.module";
import { LotterySystemDeliveryModule } from "../lottery-system-delivery/lottery-system-delivery.module";
import { LotteryRnDModule } from "../lottery-rn-d/lottery-rn-d.module";
import { LotteryGoLiveCalenderModule } from "../lottery-go-live-calender/lottery-go-live-calender.module";
import { LoginModule } from "../login/login.module";
import { CasinoDashboardModule } from "../casino-dashboard/casino-dashboard.module";
import { CasinoSdModule } from "../casino-sd/casino-sd.module";
import { CasinoRndModule } from "../casino-rnd/casino-rnd.module";
import { CasinoGoLiveModule } from "../casino-go-live/casino-go-live.module";
import { VltCustomerModule } from "../vlt-customer/vlt-customer.module";
import { VltGoLiveModule } from "../vlt-go-live/vlt-go-live.module";
import { VltSdModule } from "../vlt-sd/vlt-sd.module";
import { VltDashboardModule } from "../vlt-dashboard/vlt-dashboard.module";
import { VltRndModule } from "../vlt-rnd/vlt-rnd.module";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
 suppressScrollX: true,
};


@NgModule({
  declarations: [
    AmountPipe
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({ data: DataReducer }),
    EffectsModule.forRoot([DataEffects]),

   
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    LotteryDashboardModule,
    LotteryServiceDeliveryModule,
    LotterySystemDeliveryModule ,
    LotteryRnDModule,
    LotteryGoLiveCalenderModule,
    CasinoDashboardModule,
    CasinoSdModule,
    CasinoRndModule,
    CasinoGoLiveModule,
    VltCustomerModule,
    VltGoLiveModule,
    VltSdModule,
    VltDashboardModule,
    VltRndModule,
    BrowserModule,
    BrowserAnimationsModule,
    RichTextEditorAllModule,
    MaterialModule,
    ParticlesModule,
    HttpClientModule,
    NgxEchartsModule,
    PerfectScrollbarModule,
    LoginModule,
    CommonShareModule,
   
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
    }
  ]
})
export class CommonShareModule { }
