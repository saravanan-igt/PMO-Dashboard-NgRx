import { Component, OnInit, Input } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { select, Store } from "@ngrx/store";
import DataState from "../../../Store/data.state";

@Component({
  selector: "app-rnd",
  templateUrl: "./rnd.component.html",
  styleUrls: ["./rnd.component.scss"],
})
export class RndComponent implements OnInit {
  @Input() pageTitle: string = "Lottery R & D";
  public activeProjects;
  public plannedProjects;
  public closedProjects;
  public scheduleData;
  public dashboardData;
  public rndProjects;
  lotteryProjectsData = [];
  totalBudgetData = [];
  totalRiskData = [];
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
          this.rndProjects = this.DataLists[0].rnd;
          this.activeProjects = this.rndProjects.projectList.Active;
          this.plannedProjects = this.rndProjects.projectList.Planned;
          this.closedProjects = this.rndProjects.projectList.Completed;

          this.lotteryProjectsData = [
            { value: this.activeProjects.length, name: "Active" },
            { value: this.plannedProjects.length, name: "Planned" },
            { value: this.closedProjects.length, name: "Closed" },
          ];

          this.totalBudgetData = [
            { value: this.rndProjects.activeBudget, name: "Active" },
            { value: this.rndProjects.plannedBudget, name: "Planned" },
            { value: this.rndProjects.closedBudget, name: "Closed" },
          ];

          this.totalRiskData = [
            {
              value: this.rndProjects.rag.red,
              name: "Red",
            },
            {
              value: this.rndProjects.rag.amber,
              name: "Amber",
            },
            {
              value: this.rndProjects.rag.green,
              name: "Green",
            },
          ];

          this.scheduleData = this.activeProjects.map((item) => {
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
      });
  }
}
