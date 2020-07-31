import { Component, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { select, Store } from "@ngrx/store";
import DataState from "../../../Store/data.state";

@Component({
  selector: "app-game-customer",
  templateUrl: "./game-customer.component.html",
  styleUrls: ["./game-customer.component.scss"],
})
export class GameCustomerComponent implements OnInit {
  pageTitle: string = "Casino System Delivery";
  public plannedProjectData;
  public activeProjectDetails;

  public dashboardData;
  gameProjectData;
  totalProjectsData;
  totalBudgetData;
  totalRiskData;
  closedProjectData;
  scheduleData;
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
              value: this.gameProjectData.sd.projects.active.length,
              name: "Active",
            },
            {
              value: this.gameProjectData.sd.projects.planned.length,
              name: "Planned",
            },
            {
              value: this.gameProjectData.sd.projects.closed.length,
              name: "Closed",
            },
          ];
          this.totalBudgetData = [
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
              name: "Closed",
            },
          ];

          this.totalRiskData = [
            {
              value: this.gameProjectData.sd.rag.red,
              name: "Red",
            },
            {
              value: this.gameProjectData.sd.rag.amber,
              name: "Amber",
            },
            {
              value: this.gameProjectData.sd.rag.green,
              name: "Green",
            },
          ];

          this.plannedProjectData = this.gameProjectData.sd.projects.planned.map(
            (item) => {
              return {
                ...item,
                Project: item["PROJECT_NAME"],
                ID: item["PROJECT_ID"],
                "Forecast Dollars": item["FORECAST_COST"],
              };
            }
          );
          this.activeProjectDetails = this.gameProjectData.sd.projects.active.map(
            (item) => {
              return {
                ...item,
                Project: item["PROJECT_NAME"],
                ID: item["PROJECT_ID"],
                "Forecast Dollars": item["BUDGET_COST"],
              };
            }
          );
          this.closedProjectData = this.gameProjectData.sd.projects.closed.map(
            (item) => {
              return {
                ...item,
                Project: item["PROJECT_NAME"],
                ID: item["PROJECT_ID"],
                "Forecast Dollars": item["BUDGET_COST"],
              };
            }
          );

          this.scheduleData = [...this.gameProjectData.sd.projects.active].map(
            (item) => {
              let data = item.LIVE_DATE.split("/");
              let year = data[2].split("")[2] + "" + data[2].split("")[3];
              let obj = {
                ...item,
                Project: item["PROJECT_NAME"],
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
              return obj;
            }
          );
        }
      });
  }
}