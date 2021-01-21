import { Component, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { select, Store } from "@ngrx/store";
import DataState from "../../Store/data.state";

@Component({
  selector: "app-game-dashboard",
  templateUrl: "./game-dashboard.component.html",
  styleUrls: ["./game-dashboard.component.scss"],
})
export class GameDashboardComponent implements OnInit {
  pageTitle: string = "Casino Dashboard";

  dashboardData: any;
  gameProjectData: any;
  totalProjectsData;
  customerProjectsData;
  rndProjectsData;
  totalBudgetData;
  customerBudgetData;
  rndBudgetData;
  totalRiskData;
  riskProfileData;
  xAxisData = ["SD", "R & D"];
  forecastSeriesData;
  forecastLegend;
  calendarData;
  ragState;
  budgetSeriesData;

  dataList$: Observable<DataState>;
  DataSubscription: Subscription;
  DataLists: any[] = [];
  dataError;
  helpText;
  constructor(private store: Store<{ data: DataState }>) {
    this.dataList$ = store.pipe(select("data"));
  }

  ngOnInit() {
    this.DataSubscription = this.dataList$
      .pipe(map((x) => x))
      .subscribe((data) => {
        if (data.Data.length) {
          this.DataLists = data.Data;
          this.helpText = this.DataLists[3];
          this.gameProjectData = this.DataLists[1];
          this.totalProjectsData = [
            {
              value:
                this.gameProjectData.sd.projects.active.length +
                this.gameProjectData.rnd.projects.active.length,
              name: "Active",
            },
            {
              value:
                this.gameProjectData.sd.projects.planned.length +
                this.gameProjectData.rnd.projects.planned.length,
              name: "Planned",
            },
            {
              value:
                this.gameProjectData.sd.projects.closed.length +
                this.gameProjectData.rnd.projects.closed.length,
              name: "Completed",
            },
          ];
          this.customerProjectsData = [
            {
              value: this.gameProjectData.sd.projects.active.length,
              name: "Active",
            },
            {
              value: this.gameProjectData.sd.projects.planned.length,
              name: "Planned",
            },
            {
              value: this.gameProjectData.sd.projects.closed.length,
              name: "Completed",
            },
          ];
          this.rndProjectsData = [
            {
              value: this.gameProjectData.rnd.projects.active.length,
              name: "Active",
            },
            {
              value: this.gameProjectData.rnd.projects.planned.length,
              name: "Planned",
            },
            {
              value: this.gameProjectData.rnd.projects.closed.length,
              name: "Completed",
            },
          ];
          this.totalBudgetData = [
            {
              value:
                this.gameProjectData.sd.budget.active +
                this.gameProjectData.rnd.budget.active,
              name: "Active",
            },
            {
              value:
                this.gameProjectData.sd.budget.planned +
                this.gameProjectData.rnd.budget.planned,
              name: "Planned",
            },
            {
              value:
                this.gameProjectData.sd.budget.closed +
                this.gameProjectData.rnd.budget.closed,
              name: "Completed",
            },
          ];
          this.customerBudgetData = [
            {
              value: this.gameProjectData.sd.budget.active,
              name: "Active",
            },
            {
              value: this.gameProjectData.sd.budget.planned,
              name: "Planned",
            },
            {
              value: this.gameProjectData.sd.budget.closed,
              name: "Completed",
            },
          ];
          this.rndBudgetData = [
            {
              value: this.gameProjectData.rnd.budget.active,
              name: "Active",
            },
            {
              value: this.gameProjectData.rnd.budget.planned,
              name: "Planned",
            },
            {
              value: this.gameProjectData.rnd.budget.closed,
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
                this.gameProjectData.sd.budget.active,
                this.gameProjectData.rnd.budget.active,
              ],
            },
            {
              name: "Planned",
              type: "bar",
              barMaxWidth: 40,
              data: [
                this.gameProjectData.sd.budget.planned,
                this.gameProjectData.rnd.budget.planned,
              ],
            },
            {
              name: "Completed",
              type: "bar",
              barMaxWidth: 40,
              data: [
                this.gameProjectData.sd.budget.closed,
                this.gameProjectData.rnd.budget.closed,
              ],
            },
          ];

          this.forecastLegend = [
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
                this.gameProjectData.sd.budget.active,
                this.gameProjectData.sd.budget.closed,
                this.gameProjectData.rnd.budget.active,
                this.gameProjectData.rnd.budget.closed,
              ],
            },
            {
              name: "Current Forecast",
              type: "bar",
              data: [
                this.gameProjectData.sd.budget.activeForecast,
                this.gameProjectData.sd.budget.closedForecast,
                this.gameProjectData.rnd.budget.activeForecast,
                this.gameProjectData.rnd.budget.closedForecast,
              ],
            },
          ];

          this.totalRiskData = [
            {
              value:
                this.gameProjectData.sd.rag.red +
                this.gameProjectData.rnd.rag.red,
              name: "Red",
            },
            {
              value:
                this.gameProjectData.sd.rag.amber +
                this.gameProjectData.rnd.rag.amber,
              name: "Amber",
            },
            {
              value:
                this.gameProjectData.sd.rag.green +
                this.gameProjectData.rnd.rag.green,
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
                this.gameProjectData.sd.rag.red,
                this.gameProjectData.rnd.rag.red,
              ],
            },
            {
              name: "Amber",
              type: "bar",
              barMaxWidth: 40,
              data: [
                this.gameProjectData.sd.rag.amber,
                this.gameProjectData.rnd.rag.amber,
              ],
            },
            {
              name: "Green",
              type: "bar",
              barMaxWidth: 40,
              data: [
                this.gameProjectData.sd.rag.green,
                this.gameProjectData.rnd.rag.green,
              ],
            },
          ];

          let lotteryProjects = [
            ...this.gameProjectData.sd.projects.active,
            ...this.gameProjectData.rnd.projects.active,
          ];
          this.createCalendarData(lotteryProjects);
        }
      });
  }

  createCalendarData(data) {
    this.calendarData = data.map((item) => {
      let data = item.LIVE_DATE.split("/");
      let year = data[2].split("")[2] + "" + data[2].split("")[3];
      return {
        ...item,
        BUSINESS_TYPE: item.BUSINESS_TYPE === "R&D" ? "PD" : item.BUSINESS_TYPE,
        Project: item["PROJECT_NAME"],
        ID: item["PROJECT_ID"],
        "Forecast Dollars": item["FORECAST_COST"],
        LiveDate: data[0] + "/" + data[1] + "/" + year,
        BusinessType: item["VERTICAL"],
        Component: item["BUSINESS_VERTICAL"],
        RAG:
          item["OVERALL_RISK"] === "Green"
            ? "G"
            : item["OVERALL_RISK"] === "Red"
            ? "R"
            : "A",
      };
    });
  }

  ngOnChanges() {}
}

