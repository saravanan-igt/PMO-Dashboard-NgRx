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
import { ProjectCategoryComponent } from "../charts/project-category/project-category.component";
import { BudgetChartComponent } from "../charts/budget-chart/budget-chart.component";
import { BudgetBarChartComponent } from "../charts/budget-bar-chart/budget-bar-chart.component";
import { ForecastChartComponent } from "../charts/forecast-chart/forecast-chart.component";
import { ProjectCardComponent } from "src/app/shared/utility/project-card/project-card.component";
import { GoLiveCalendarComponent } from "src/app/shared/components/go-live-calendar/go-live-calendar.component";
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
 suppressScrollX: true,
};


@NgModule({
  declarations: [
    AmountPipe,ProjectCategoryComponent,BudgetChartComponent,BudgetBarChartComponent,ForecastChartComponent,
    GoLiveCalendarComponent,ProjectCardComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RichTextEditorAllModule,
    NgbModule,
    MaterialModule,
    ParticlesModule,
    HttpClientModule,
    NgxEchartsModule,
    PerfectScrollbarModule,
  ],
  exports:[
    AmountPipe,ProjectCategoryComponent,BudgetChartComponent,BudgetBarChartComponent,ForecastChartComponent,
    GoLiveCalendarComponent,ProjectCardComponent
  ]
 
  // providers: [
  //   LoaderService,
  //   PageLoaderService,
  //   CommonService,
  //   { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  //   { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  //   {
  //     provide: PERFECT_SCROLLBAR_CONFIG,
  //     useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
  //   }
  // ]
})
export class CommonShareModule { }
