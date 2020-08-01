import { Component, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { select, Store } from "@ngrx/store";
import DataState from "../../../Store/data.state";

@Component({
  selector: "app-lottery-dashboard",
  templateUrl: "./lottery-dashboard.component.html",
  styleUrls: ["./lottery-dashboard.component.scss"],
})
export class LotteryDashboardComponent implements OnInit {
  pageTitle: string = "Lottery Dashboard";
  lotteryProjectsData = [];
  lotterySVProjectsData = [];
  lotterySDProjectsData = [];
  lotteryPlannedProjectsData = [];
  totalBudgetData = [];
  budgetSeriesData = [];
  rndBudgetData = [];
  xAxisData = ["SV", "SD", "R & D"];
  dashboardData: any;
  customerProjects;
  totalProjects;
  totalRiskData = [];
  riskProfileData = [];
  forecastLegend;
  forecastSeriesData;
  calendarData;
  rndProjects;
  ragState = "Red";
  dataList$: Observable<DataState>;
  DataSubscription: Subscription;
  DataLists: any[] = [];
  dataError;
  helpText;

  constructor(private store: Store<{ data: DataState }>) {
    this.dataList$ = store.pipe(select("data"));
  }

  createCalendarData(data) {
    this.calendarData = data.map((item) => {
      let data = item.CurrentGoLiveDate.split("/");
      let year = data[2].split("")[2] + "" + data[2].split("")[3];
      return {
        ...item,
        LiveDate: data[0] + "/" + data[1] + "/" + year,
        BusinessType: item["BusinessTypeCode"],
        Component: item["Customer"],
      };
    });
  }

  ngOnInit() {
    this.DataSubscription = this.dataList$
      .pipe(map((x) => x))
      .subscribe((data) => {
        if (data.Data.length) {
          this.DataLists = data.Data;
          this.helpText = this.DataLists[3];
          this.customerProjects = this.DataLists[0].customer;
          this.rndProjects = this.DataLists[0].rnd;

          this.totalProjects =
            this.customerProjects.projectList.Active.length +
            this.customerProjects.projectList.Planned.length +
            this.customerProjects.projectList.Completed.length;

          this.lotteryProjectsData = [
            {
              value:
                this.customerProjects.projectList.Active.length +
                this.rndProjects.projectList.Active.length,
              name: "Active",
            },
            {
              value:
                this.customerProjects.projectList.Planned.length +
                this.rndProjects.projectList.Planned.length,
              name: "Planned",
            },
            {
              value:
                this.customerProjects.projectList.Completed.length +
                this.rndProjects.projectList.Completed.length,
              name: "Completed",
            },
          ];

          this.lotterySVProjectsData = [
            {
              value: this.customerProjects.sv.active,
              name: "Active",
            },
            {
              value: this.customerProjects.sv.planned,
              name: "Planned",
            },
            {
              value: this.customerProjects.sv.closed,
              name: "Completed",
            },
          ];
          this.lotterySDProjectsData = [
            {
              value: this.customerProjects.sd.active,
              name: "Active",
            },
            {
              value: this.customerProjects.sd.planned,
              name: "Planned",
            },
            {
              value: this.customerProjects.sd.closed,
              name: "Completed",
            },
          ];
          this.lotteryPlannedProjectsData = [
            {
              value: this.rndProjects.projectList.Active.length,
              name: "Active",
            },
            {
              value: this.rndProjects.projectList.Planned.length,
              name: "Planned",
            },
            {
              value: this.rndProjects.projectList.Completed.length,
              name: "Completed",
            },
          ];

          this.totalBudgetData = [
            {
              value:
                this.customerProjects.activeBudget +
                this.rndProjects.activeBudget,
              name: "Active",
            },
            {
              value:
                this.customerProjects.plannedBudget +
                this.rndProjects.plannedBudget,
              name: "Planned",
            },
            {
              value:
                this.customerProjects.closedBudget +
                this.rndProjects.closedBudget,
              name: "Completed",
            },
          ];

          this.budgetSeriesData = [
            {
              name: "Active",
              type: "bar",
              barGap: 0,
              barMaxWidth: 40,
              data: [
                this.customerProjects.sv.activeBudget,
                this.customerProjects.sd.activeBudget,
                this.rndProjects.activeBudget,
              ],
            },
            {
              name: "Planned",
              type: "bar",
              barMaxWidth: 40,
              data: [
                this.customerProjects.sv.plannedBudget,
                this.customerProjects.sd.plannedBudget,
                this.rndProjects.plannedBudget,
              ],
            },
            {
              name: "Completed",
              type: "bar",
              barMaxWidth: 40,
              data: [
                this.customerProjects.sv.closedBudget,
                this.customerProjects.sd.closedBudget,
                this.rndProjects.closedBudget,
              ],
            },
          ];
          this.rndBudgetData = [
            {
              name: "Active",
              value: this.rndProjects.activeBudget,
            },
            {
              name: "Planned",
              value: this.rndProjects.plannedBudget,
            },
            {
              name: "Completed",
              value: this.rndProjects.closedBudget,
            },
          ];

          this.forecastLegend = [
            "SV Active",
            "SV Completed",
            "SD Active",
            "SD Completed",
            "R&D Active",
            "R&D Completed",
          ];

          this.forecastSeriesData = [
            {
              name: "Cost Planning",
              type: "line",
              data: [
                this.customerProjects.sv.activeBudgetF,
                this.customerProjects.sv.closedBudgetF,
                this.customerProjects.sd.activeBudgetF,
                this.customerProjects.sd.closedBudgetF,
                this.rndProjects.activeBudgetF,
                this.rndProjects.closedBudgetF,
              ],
            },
            {
              name: "Current Forecast",
              type: "bar",
              data: [
                this.customerProjects.sv.activeForecast,
                this.customerProjects.sv.closedForecast,
                this.customerProjects.sd.activeForecast,
                this.customerProjects.sd.closedForecast,
                this.rndProjects.activeForecast,
                this.rndProjects.closedForecast,
              ],
            },
          ];

          this.totalRiskData = [
            {
              value:
                this.customerProjects.sv.red +
                this.customerProjects.sd.red +
                this.rndProjects.rag.red,
              name: "Red",
            },
            {
              value:
                this.customerProjects.sv.amber +
                this.customerProjects.sd.amber +
                this.rndProjects.rag.amber,
              name: "Amber",
            },
            {
              value:
                this.customerProjects.sv.green +
                this.customerProjects.sd.green +
                this.rndProjects.rag.green,
              name: "Green",
            },
          ];
          this.riskProfileData = [
            {
              name: "Red",
              type: "bar",
              barGap: 0,
              barMaxWidth: 40,
              data: [
                this.customerProjects.sv.red,
                this.customerProjects.sd.red,
                this.rndProjects.rag.red,
              ],
            },
            {
              name: "Amber",
              type: "bar",
              barMaxWidth: 40,
              data: [
                this.customerProjects.sv.amber,
                this.customerProjects.sd.amber,
                this.rndProjects.rag.amber,
              ],
            },
            {
              name: "Green",
              type: "bar",
              barMaxWidth: 40,
              data: [
                this.customerProjects.sv.green,
                this.customerProjects.sd.green,
                this.rndProjects.rag.green,
              ],
            },
          ];

          let lotteryProjects = [
            ...this.customerProjects.projectList.Active,
            ...this.rndProjects.projectList.Active,
          ];

          this.createCalendarData(lotteryProjects);
        }
      });
  }

  ngOnDestroy() {
    if (this.DataSubscription) {
      this.DataSubscription.unsubscribe();
    }
  }
}
