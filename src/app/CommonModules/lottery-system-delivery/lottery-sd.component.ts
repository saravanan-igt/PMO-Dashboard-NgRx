import { Component, OnInit, ViewChild } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { select, Store } from "@ngrx/store";
import DataState from "../../Store/data.state";
import { CommonService } from '../../services/common.service';
import { delay } from 'rxjs/operators';
import { ProjectCategory1Module } from "project-category-lib1";
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
            { value: this.closedProjects.length, name: "Completed" },
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
              name: "Completed",
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
