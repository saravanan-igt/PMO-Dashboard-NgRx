import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard.component";
import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';
import { ProjectCategoryComponent } from "../../charts/project-category/project-category.component";
import { BudgetChartComponent } from "../../charts/budget-chart/budget-chart.component";
import { BudgetBarChartComponent } from "../../charts/budget-bar-chart/budget-bar-chart.component";
import { ForecastChartComponent } from "../../charts/forecast-chart/forecast-chart.component";
import { GoLiveCalendarComponent } from "src/app/shared/components/go-live-calendar/go-live-calendar.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../../shared/material-module";
import { NgxEchartsModule } from "ngx-echarts";
import { AmountPipe } from "../../pipes/amount.pipe";
@NgModule({
  declarations: [DashboardComponent,ProjectCategoryComponent,BudgetChartComponent,BudgetBarChartComponent,
    ForecastChartComponent,GoLiveCalendarComponent,AmountPipe],
  imports: [
    CommonModule,
    DashboardModuleRoutingModule,NgbModule,MaterialModule,NgxEchartsModule
  ]
})
export class DashboardModuleModule { }
