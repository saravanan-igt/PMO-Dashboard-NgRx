import { Component, OnInit, ViewChild } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { select, Store } from "@ngrx/store";
import DataState from "../../../Store/data.state";
import { GoLiveCalendarComponent } from "../go-live-calendar/go-live-calendar.component";

@Component({
  selector: "app-vlt-dashboard",
  templateUrl: "./vlt-dashboard.component.html",
  styleUrls: ["./vlt-dashboard.component.scss"],
})
export class VltDashboardComponent implements OnInit {

  pageTitle: string = "VLT Dashboard"; 
   @ViewChild(GoLiveCalendarComponent,  { static: false })
  goLiveCalendar: GoLiveCalendarComponent;    
  //pageTitle: string = "VLT Dashboard"; 
  gameProjectData: any;
  totalProjectsData;
  customerProjectsData;
  rndProjectsData;
  svdProjectsData;
  totalBudgetData;
  customerBudgetData;
  rndBudgetData;
  totalRiskData;
  riskProfileData;
  xAxisData = ["SD", "SV", "R&D"];
  forecastLegend;
  forecastSeriesData;
  calendarData;
  ragState = "Amber";
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
          this.gameProjectData = this.DataLists[2];
          console.log("title");
          this.totalProjectsData = [
            {
              value:
                this.gameProjectData.sd.projects.active.length +
                this.gameProjectData.sv.projects.active.length +
                this.gameProjectData.rnd.projects.active.length,
              name: "Active",
            },
            {
              value:
                this.gameProjectData.sd.projects.planned.length +
                this.gameProjectData.sv.projects.planned.length +
                this.gameProjectData.rnd.projects.planned.length,
              name: "Planned",
            },
            {
              value:
                this.gameProjectData.sd.projects.closed.length +
                this.gameProjectData.sv.projects.closed.length +
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
          this.svdProjectsData = [
            {
              value: this.gameProjectData.sv.projects.active.length,
              name: "Active",
            },
            {
              value: this.gameProjectData.sv.projects.planned.length,
              name: "Planned",
            },
            {
              value: this.gameProjectData.sv.projects.closed.length,
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
                this.gameProjectData.sv.budget.active +
                this.gameProjectData.rnd.budget.active,
              name: "Active",
            },
            {
              value:
                this.gameProjectData.sd.budget.planned +
                this.gameProjectData.sv.budget.planned +
                this.gameProjectData.rnd.budget.planned,
              name: "Planned",
            },
            {
              value:
                this.gameProjectData.sd.budget.closed +
                this.gameProjectData.sv.budget.closed +
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
              value: this.gameProjectData.sv.budget.active,
              name: "Active",
            },
            {
              value: this.gameProjectData.sv.budget.planned,
              name: "Planned",
            },
            {
              value: this.gameProjectData.sv.budget.closed,
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
                this.gameProjectData.sv.budget.active,
                this.gameProjectData.rnd.budget.active,
              ],
            },
            {
              name: "Planned",
              type: "bar",
              barMaxWidth: 40,
              data: [
                this.gameProjectData.sd.budget.planned,
                this.gameProjectData.sv.budget.planned,
                this.gameProjectData.rnd.budget.planned,
              ],
            },
            {
              name: "Completed",
              type: "bar",
              barMaxWidth: 40,
              data: [
                this.gameProjectData.sd.budget.closed,
                this.gameProjectData.sv.budget.closed,
                this.gameProjectData.rnd.budget.closed,
              ],
            },
          ];
          this.forecastLegend = [
            "SD Active",
            "SD Completed",
            "SV Active",
            "SV Completed",
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
                this.gameProjectData.sv.budget.active,
                this.gameProjectData.sv.budget.closed,
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
                this.gameProjectData.sv.budget.activeForecast,
                this.gameProjectData.sv.budget.closedForecast,
                this.gameProjectData.rnd.budget.activeForecast,
                this.gameProjectData.rnd.budget.closedForecast,
              ],
            },
          ];

          this.totalRiskData = [
            {
              value:
                this.gameProjectData.sd.rag.red +
                this.gameProjectData.sv.rag.red +
                this.gameProjectData.rnd.rag.red,
              name: "Red",
            },
            {
              value:
                this.gameProjectData.sd.rag.amber +
                this.gameProjectData.sv.rag.amber +
                this.gameProjectData.rnd.rag.amber,
              name: "Amber",
            },
            {
              value:
                this.gameProjectData.sd.rag.green +
                this.gameProjectData.sv.rag.green +
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
                this.gameProjectData.sv.rag.red,
                this.gameProjectData.rnd.rag.red,
              ],
            },
            {
              name: "Amber",
              type: "bar",
              barMaxWidth: 40,
              data: [
                this.gameProjectData.sd.rag.amber,
                this.gameProjectData.sv.rag.amber,
                this.gameProjectData.rnd.rag.amber,
              ],
            },
            {
              name: "Green",
              type: "bar",
              barMaxWidth: 40,
              data: [
                this.gameProjectData.sd.rag.green,
                this.gameProjectData.sv.rag.green,
                this.gameProjectData.rnd.rag.green,
              ],
            },
          ];

          let gamingProjects = [
            ...this.gameProjectData.sd.projects.active,
            ...this.gameProjectData.sv.projects.active,
            ...this.gameProjectData.rnd.projects.active,
          ];

          this.createCalendarData(gamingProjects);
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

  exportGoliveCalendar(event) {
    this.goLiveCalendar.exportAsExcelFile()
  }
}
