import { Component, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { select, Store } from "@ngrx/store";
import DataState from "../../../Store/data.state";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  pageTitle: string = "Portfolio Dashboard";
  totalProjectsData = [];
  lotteryProjectsData = [];
  casinoProjectsData = [];
  vltProjectsData = [];
  vltProjects;
  budgetSeriesData = [];
  totalBudgetData = [];
  budgetXaxis = ["Lottery", "Casino", "VLT"];
  totalRiskData = [];
  riskProfileData = [];
  customerActiveProjects;
  calendarData;
  customerProjects;
  rndProjects;
  gameProjects;
  forecastSeriesData;
  forecastLegend;
  dataList$: Observable<DataState>;
  DataSubscription: Subscription;
  DataLists: any[] = [];
  dataError;

  calculateTotal(data) {
    let total = data.reduce((total, currentValue) => {
      return total + Number(currentValue);
    }, 0);
    return Number(total.toFixed(2));
  }

  constructor(private store: Store<{ data: DataState }>) {
    this.dataList$ = store.pipe(select("data"));
  }

  ngOnInit() {
    this.DataSubscription = this.dataList$
      .pipe(map((x) => x))
      .subscribe((data) => {
        if (data.Data.length) {
          this.DataLists = data.Data;
          this.customerProjects = this.DataLists[0].customer;
          this.rndProjects = this.DataLists[0].rnd;
          this.customerActiveProjects = this.customerProjects.projectList.Active;
          this.gameProjects = this.DataLists[1];
          this.vltProjects = this.DataLists[2];

          this.totalProjectsData = [
            {
              value:
                this.customerProjects.projectList.Active.length +
                this.rndProjects.projectList.Active.length +
                this.gameProjects.sd.projects.active.length +
                this.gameProjects.rnd.projects.active.length +
                this.vltProjects.sd.projects.active.length +
                this.vltProjects.sv.projects.active.length +
                this.vltProjects.rnd.projects.active.length,
              name: "Active",
            },
            {
              value:
                this.customerProjects.projectList.Planned.length +
                this.rndProjects.projectList.Planned.length +
                this.gameProjects.sd.projects.planned.length +
                this.gameProjects.rnd.projects.planned.length +
                this.vltProjects.sd.projects.planned.length +
                this.vltProjects.sv.projects.planned.length +
                this.vltProjects.rnd.projects.planned.length,
              name: "Planned",
            },
            {
              value:
                this.customerProjects.projectList.Completed.length +
                this.rndProjects.projectList.Completed.length +
                this.gameProjects.sd.projects.closed.length +
                this.gameProjects.rnd.projects.closed.length +
                this.vltProjects.sd.projects.closed.length +
                this.vltProjects.sv.projects.closed.length +
                this.vltProjects.rnd.projects.closed.length,
              name: "Closed",
            },
          ];
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
              name: "Closed",
            },
          ];
          this.casinoProjectsData = [
            {
              value:
                this.gameProjects.sd.projects.active.length +
                this.gameProjects.rnd.projects.active.length,
              name: "Active",
            },
            {
              value:
                this.gameProjects.sd.projects.planned.length +
                this.gameProjects.rnd.projects.planned.length,
              name: "Planned",
            },
            {
              value:
                this.gameProjects.sd.projects.closed.length +
                this.gameProjects.rnd.projects.closed.length,
              name: "Closed",
            },
          ];
          this.vltProjectsData = [
            {
              value:
                this.vltProjects.sd.projects.active.length +
                this.vltProjects.sv.projects.active.length +
                this.vltProjects.rnd.projects.active.length,
              name: "Active",
            },
            {
              value:
                this.vltProjects.sd.projects.planned.length +
                this.vltProjects.sv.projects.planned.length +
                this.vltProjects.rnd.projects.planned.length,
              name: "Planned",
            },
            {
              value:
                this.vltProjects.sd.projects.closed.length +
                this.vltProjects.sv.projects.closed.length +
                this.vltProjects.rnd.projects.closed.length,
              name: "Closed",
            },
          ];

          let budgetData = {
            active:
              this.customerProjects.activeBudget +
              this.rndProjects.activeBudget,
            planned:
              this.customerProjects.plannedBudget +
              this.rndProjects.plannedBudget,
            closed:
              this.customerProjects.closedBudget +
              this.rndProjects.closedBudget,
          };

          this.budgetSeriesData = [
            {
              name: "Active",
              type: "bar",
              barGap: 0,
              barMaxWidth: 40,
              data: [
                budgetData.active,
                this.gameProjects.sd.budget.active +
                  this.gameProjects.rnd.budget.active,
                this.vltProjects.sd.budget.active +
                  this.vltProjects.sv.budget.active +
                  this.vltProjects.rnd.budget.active,
              ],
            },
            {
              name: "Planned",
              type: "bar",
              barMaxWidth: 40,
              data: [
                budgetData.planned,
                this.gameProjects.sd.budget.planned +
                  this.gameProjects.rnd.budget.planned,
                this.vltProjects.sd.budget.planned +
                  this.vltProjects.sv.budget.planned +
                  this.vltProjects.rnd.budget.planned,
              ],
            },
            {
              name: "Closed",
              type: "bar",
              barMaxWidth: 40,
              data: [
                budgetData.closed,
                this.gameProjects.sd.budget.closed +
                  this.gameProjects.rnd.budget.closed,
                this.vltProjects.sd.budget.closed +
                  this.vltProjects.sv.budget.closed +
                  this.vltProjects.rnd.budget.closed,
              ],
            },
          ];

          this.totalBudgetData = [
            {
              value: this.calculateTotal(this.budgetSeriesData[0].data),
              name: "Active",
            },
            {
              value: this.calculateTotal(this.budgetSeriesData[1].data),
              name: "Planned",
            },
            {
              value: this.calculateTotal(this.budgetSeriesData[2].data),
              name: "Closed",
            },
          ];

          this.forecastSeriesData = [
            {
              name: "Cost Planning",
              type: "line",
              data: [
                this.customerProjects.activeBudgetF +
                  this.rndProjects.activeBudgetF,
                this.customerProjects.closedBudgetF +
                  this.rndProjects.closedBudgetF,
                this.gameProjects.sd.budget.active +
                  this.gameProjects.rnd.budget.active,
                this.gameProjects.sd.budget.closed +
                  this.gameProjects.rnd.budget.closed,
                this.vltProjects.sd.budget.active +
                  this.vltProjects.sv.budget.active +
                  this.vltProjects.rnd.budget.active,
                this.vltProjects.sd.budget.closed +
                  this.vltProjects.sv.budget.closed +
                  this.vltProjects.rnd.budget.closed,
              ],
            },
            {
              name: "Current Forecast",
              type: "bar",
              data: [
                Number(
                  this.customerProjects.sd.activeForecast +
                    this.customerProjects.sv.activeForecast
                ).toFixed(2),
                Number(
                  this.customerProjects.sd.closedForecast +
                    this.customerProjects.sv.closedForecast
                ).toFixed(2),
                this.gameProjects.sd.budget.activeForecast +
                  this.gameProjects.rnd.budget.activeForecast,
                this.gameProjects.sd.budget.closedForecast +
                  this.gameProjects.rnd.budget.closedForecast,
                this.vltProjects.sd.budget.activeForecast +
                  this.vltProjects.sv.budget.activeForecast +
                  this.vltProjects.rnd.budget.activeForecast,
                this.vltProjects.sd.budget.closedForecast +
                  this.vltProjects.sv.budget.closedForecast +
                  this.vltProjects.rnd.budget.closedForecast,
              ],
            },
          ];

          this.totalRiskData = [
            {
              value:
                this.customerProjects.rag.red +
                this.rndProjects.rag.red +
                this.gameProjects.sd.rag.red +
                this.gameProjects.rnd.rag.red +
                this.vltProjects.sd.rag.red +
                this.vltProjects.sv.rag.red +
                this.vltProjects.rnd.rag.red,
              name: "Red",
            },
            {
              value:
                this.customerProjects.rag.amber +
                this.rndProjects.rag.amber +
                this.gameProjects.sd.rag.amber +
                this.gameProjects.rnd.rag.amber +
                this.vltProjects.sd.rag.amber +
                this.vltProjects.sv.rag.amber +
                this.vltProjects.rnd.rag.amber,
              name: "Amber",
            },
            {
              value:
                this.customerProjects.rag.green +
                this.rndProjects.rag.green +
                this.gameProjects.sd.rag.green +
                this.gameProjects.rnd.rag.green +
                this.vltProjects.sd.rag.green +
                this.vltProjects.sv.rag.green +
                this.vltProjects.rnd.rag.green,
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
                this.customerProjects.rag.red + this.rndProjects.rag.red,
                this.gameProjects.sd.rag.red + this.gameProjects.rnd.rag.red,
                this.vltProjects.sd.rag.red +
                  this.vltProjects.sv.rag.red +
                  this.vltProjects.rnd.rag.red,
              ],
            },
            {
              name: "Amber",
              type: "bar",
              barMaxWidth: 40,
              data: [
                this.customerProjects.rag.amber + this.rndProjects.rag.amber,
                this.gameProjects.sd.rag.amber +
                  this.gameProjects.rnd.rag.amber,
                this.vltProjects.sd.rag.amber +
                  this.vltProjects.sv.rag.amber +
                  this.vltProjects.rnd.rag.amber,
              ],
            },
            {
              name: "Green",
              type: "bar",
              barMaxWidth: 40,
              data: [
                this.customerProjects.rag.green + this.rndProjects.rag.green,
                this.gameProjects.sd.rag.green +
                  this.gameProjects.rnd.rag.green,
                this.vltProjects.sd.rag.green +
                  this.vltProjects.sv.rag.green +
                  this.vltProjects.rnd.rag.green,
              ],
            },
          ];

          let customerActiveProjects = this.customerActiveProjects.map(
            (item) => {
              let data = item.CurrentGoLiveDate.split("/");
              let year = data[2].split("")[2] + "" + data[2].split("")[3];
              //item["Current Go Live Date"] = data[0] + "/" + data[1] + "/" + year;
              return {
                ...item,
                "Current Go Live Date": data[0] + "/" + data[1] + "/" + year,
              };
            }
          );
          let rndProjects = this.rndProjects.projectList.Active.map((item) => {
            let data = item.CurrentGoLiveDate.split("/");
            let year = data[2].split("")[2] + "" + data[2].split("")[3];
            // item["Current Go Live Date"] = data[0] + "/" + data[1] + "/" + year;
            return {
              ...item,
              "Current Go Live Date": data[0] + "/" + data[1] + "/" + year,
            };
          });

          let gamingProjects = [
            ...this.gameProjects.sd.projects.active,
            ...this.gameProjects.rnd.projects.active,
            ...this.vltProjects.sd.projects.active,
            ...this.vltProjects.sv.projects.active,
            ...this.vltProjects.rnd.projects.active,
          ].map((item) => {
            let data = item.LIVE_DATE.split("/");
            let year = data[2].split("")[2] + "" + data[2].split("")[3];
            // item["Current Go Live Date"] = data[0] + "/" + data[1] + "/" + year;
            return {
              ...item,
              "Current Go Live Date": data[0] + "/" + data[1] + "/" + year,
            };
          });

          let lotteryProjects = [
            ...customerActiveProjects,
            ...rndProjects,
            ...gamingProjects,
          ];
          this.createCalendarData(lotteryProjects);
        }
      });
  }

  createCalendarData(data) {
    this.calendarData = data.map((item) => {
      if (item.Project === undefined) {
        item.Project = item["PROJECT_NAME"];
      }
      item.LiveDate =
        item["Current Go Live Date"] !== undefined
          ? item["Current Go Live Date"]
          : item["Finish Date"];
      item.BusinessType =
        item["Business Type Code"] !== undefined
          ? item["BusinessVertical"]
          : item["VERTICAL"];
      item.Component =
        item["Customer"] !== undefined
          ? item["Customer"]
          : item["Business Vertical"];
      item["RAG"] =
        item["RAG"] !== undefined
          ? item["RAG"]
          : item["OVERALL_RISK"] === "Green"
          ? "G"
          : item["OVERALL_RISK"] === "Red"
          ? "R"
          : "A";
      return item;
    });
  }

  ngOnDestroy() {
    if (this.DataSubscription) {
      this.DataSubscription.unsubscribe();
    }
  }
}
