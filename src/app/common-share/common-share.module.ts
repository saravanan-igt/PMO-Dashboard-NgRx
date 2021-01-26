import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
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
import { ProjectCardComponent } from "src/app/shared/utility/project-card/project-card.component";
import { CalenderModule } from "igt-calenderchart-lib";
import { BudgetBarChartModule } from "budget-bar-chart-lib1";
import { BudgetChart1Module } from "budget-chart-lib1";
import { ForecastChartModule } from "forecast-chart-lib1";
import { ProjectCategory1Module } from "project-category-lib1";
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
 suppressScrollX: true,
};


@NgModule({
  declarations: [
    AmountPipe,
    ProjectCardComponent
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
    PerfectScrollbarModule,CalenderModule,BudgetBarChartModule,BudgetChart1Module,ForecastChartModule,ProjectCategory1Module
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports:[
    AmountPipe,ProjectCardComponent,CalenderModule,BudgetBarChartModule,
    BudgetChart1Module,ForecastChartModule,ProjectCategory1Module
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
