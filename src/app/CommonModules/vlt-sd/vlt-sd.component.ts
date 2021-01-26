import { Component, OnInit, ViewChild } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { select, Store } from "@ngrx/store";
import DataState from "../../Store/data.state";
import { CommonService } from '../../services/common.service';
import { delay } from 'rxjs/operators';
import { ProjectCategory1Module } from "project-category-lib1";
@Component({
  selector: "app-vlt-sd",
  templateUrl: "./vlt-sd.component.html",
  styleUrls: ["./vlt-sd.component.scss"],
})
export class VltSDComponent implements OnInit {
  pageTitle: string = "VLT Service Delivery";
  public plannedProjectData;
  public activeProjectDetails;
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
  resizeobj;
  @ViewChild('componentchild1', { static: false }) childComponent1: ProjectCategory1Module;
  constructor(private store: Store<{ data: DataState }>,private commonService:CommonService) {
    this.dataList$ = store.pipe(select("data"));
    this.commonService.getChangeEmitter().pipe(
      delay(500)
    ).subscribe((item: string) => {
        if(item==="clicked"){
          this.resizeobj = item;
          this.childComponent1['echartsInstance'].resize();
        }
        else{
          this.resizeobj = "";
        }
      })
  }

  ngOnInit() {
    this.DataSubscription = this.dataList$
      .pipe(map((x) => x))
      .subscribe((data) => {
        if (data.Data.length) {
          this.DataLists = data.Data;
          this.helpText = this.DataLists[3];
          this.gameProjectData = this.DataLists[2];

          this.totalProjectsData = [
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
          this.totalBudgetData = [
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

          this.totalRiskData = [
            {
              value: this.gameProjectData.sv.rag.red,
              name: "Red",
            },
            {
              value: this.gameProjectData.sv.rag.amber,
              name: "Amber",
            },
            {
              value: this.gameProjectData.sv.rag.green,
              name: "Green",
            },
          ];

          this.plannedProjectData = this.gameProjectData.sv.projects.planned.map(
            (item) => {
              return {
                ...item,
                Project: item["PROJECT_NAME"],
                ID: item["PROJECT_ID"],
                "Forecast Dollars": item["FORECAST_COST"],
              };
            }
          );
          this.activeProjectDetails = this.gameProjectData.sv.projects.active.map(
            (item) => {
              return {
                ...item,
                Project: item["PROJECT_NAME"],
                ID: item["PROJECT_ID"],
                "Forecast Dollars": item["BUDGET_COST"],
              };
            }
          );
          this.closedProjectData = this.gameProjectData.sv.projects.closed.map(
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
            let data = item["LIVE_DATE"].split("/");
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
