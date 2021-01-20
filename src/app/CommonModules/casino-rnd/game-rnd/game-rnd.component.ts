import { Component, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { select, Store } from "@ngrx/store";
import DataState from "../../../Store/data.state";

@Component({
  selector: "app-game-rnd",
  templateUrl: "./game-rnd.component.html",
  styleUrls: ["./game-rnd.component.scss"],
})
export class GameRndComponent implements OnInit {
  pageTitle: string = "Casino R & D";
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

          this.totalRiskData = [
            {
              value: this.gameProjectData.rnd.rag.red,
              name: "Red",
            },
            {
              value: this.gameProjectData.rnd.rag.amber,
              name: "Amber",
            },
            {
              value: this.gameProjectData.rnd.rag.green,
              name: "Green",
            },
          ];

          this.plannedProjectData = this.gameProjectData.rnd.projects.planned.map(
            (item) => {
              return {
                ...item,
                Project: item["PROJECT_NAME"],
                ID: item["PROJECT_ID"],
                "Forecast Dollars": item["FORECAST_COST"],
              };
            }
          );
          this.activeProjectDetails = this.gameProjectData.rnd.projects.active.map(
            (item) => {
              return {
                ...item,
                Project: item["PROJECT_NAME"],
                ID: item["PROJECT_ID"],
                "Forecast Dollars": item["BUDGET_COST"],
              };
            }
          );
          this.closedProjectData = this.gameProjectData.rnd.projects.closed.map(
            (item) => {
              return {
                ...item,
                Project: item["PROJECT_NAME"],
                ID: item["PROJECT_ID"],
                "Forecast Dollars": item["BUDGET_COST"],
              };
            }
          );

          this.scheduleData = [...this.activeProjectDetails].map((item) => {
            let data = item.LIVE_DATE.split("/");
            let year = data[2].split("")[2] + "" + data[2].split("")[3];
            return {
              ...item,
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
      });
  }
}
