import { Component, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { select, Store } from "@ngrx/store";
import DataState from "../../../Store/data.state";

@Component({
  selector: "app-lottery-sv",
  templateUrl: "./lottery-sv.component.html",
  styleUrls: ["./lottery-sv.component.scss"],
})
export class LotterySVComponent implements OnInit {
  pageTitle: string = "Lottery Service Delivery";
  public activeProjects;
  public plannedProjects;
  public closedProjects;
  public scheduleData;
  public customerData;
  public totalProjects;

  lotteryProjectsData = [];
  totalBudgetData = [];
  totalRiskData = [
    { value: 54, name: "Active" },
    { value: 62, name: "Planned" },
    { value: 87, name: "Closed" },
  ];
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
          this.customerData = this.DataLists[0].customer.sv;

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
            // item.LiveDate = data[0] + "/" + data[1] + "/" + year;
            // item.BusinessType = item["BusinessTypeCode"];
            // item.Component = item["Customer"];
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
