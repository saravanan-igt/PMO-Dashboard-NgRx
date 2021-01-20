import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LotteryDashboardRoutingModule } from './lottery-dashboard-routing.module';
import { LotteryDashboardComponent } from './lottery-dashboard.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../../shared/material-module";
// import { ProjectCategoryComponent } from "../../charts/project-category/project-category.component";
// import { BudgetChartComponent } from "../../charts/budget-chart/budget-chart.component";
// import { BudgetBarChartComponent } from "../../charts/budget-bar-chart/budget-bar-chart.component";
// import { ForecastChartComponent } from "../../charts/forecast-chart/forecast-chart.component";
// import { GoLiveCalendarComponent } from "src/app/shared/components/go-live-calendar/go-live-calendar.component";
// import { NgxEchartsModule } from "ngx-echarts";
// import { AmountPipe } from "../../pipes/amount.pipe";
@NgModule({
  declarations: [LotteryDashboardComponent,
    // ProjectCategoryComponent,BudgetChartComponent,BudgetBarChartComponent,
    // ForecastChartComponent,GoLiveCalendarComponent,AmountPipe
  ],
  imports: [
    CommonModule,
    LotteryDashboardRoutingModule,
    NgbModule,
    MaterialModule,
    // NgxEchartsModule
  ]
})
export class LotteryDashboardModule { }
