import { Component, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { select, Store } from "@ngrx/store";
import DataState from "../../../Store/data.state";

@Component({
  selector: "app-lottery-sd",
  templateUrl: "./lottery-sd.component.html",
  styleUrls: ["./lottery-sd.component.scss"],
})
export class LotterySDComponent implements OnInit {
  pageTitle: string = "Lottery System Delivery";
  public activeProjects;
  public plannedProjects;
  public closedProjects;
  public scheduleData;
  public customerData;
  public totalProjects;
  lotteryProjectsData = [];
  totalBudgetData = [];
  totalRiskData = [];

  dataList$: Observable<DataState>;
  DataSubscription: Subscription;
  DataLists: any[] = [];
  dataError;
  constructor(private store: Store<{ data: DataState }>) {
    this.dataList$ = store.pipe(select("data"));
  }

  ngOnInit() {
    this.DataSubscription = this.dataList$
      .pipe(map((x) => x))
      .subscribe((data) => {
        if (data.Data.length) {
          this.DataLists = data.Data;
          this.customerData = this.DataLists[0].customer.sd;
          this.plannedProjects = this.customerData.plannedProjects;
          this.activeProjects = this.customerData.activeProjects;
          this.closedProjects = this.customerData.closedProjects;
          this.totalProjects =
            this.plannedProjects.length +
            this.activeProjects.length +
            this.closedProjects.length;
          this.lotteryProjectsData = [
            { value: this.activeProjects.length, name: "Active" },
            { value: this.plannedProjects.length, name: "Planned" },
            { value: this.closedProjects.length, name: "Closed" },
          ];

          this.totalBudgetData = [
            {
              value: this.customerData.activeBudget,
              name: "Active",
            },
            {
              value: this.customerData.plannedBudget,
              name: "Planned",
            },
            {
              value: this.customerData.closedBudget,
              name: "Closed",
            },
          ];
          this.totalRiskData = [
            {
              value: this.customerData.red,
              name: "Red",
            },
            {
              value: this.customerData.amber,
              name: "Amber",
            },
            {
              value: this.customerData.green,
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
