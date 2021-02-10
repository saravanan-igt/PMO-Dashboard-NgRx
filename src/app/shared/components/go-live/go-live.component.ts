import { Component, OnInit, ViewChild } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { select, Store } from "@ngrx/store";
import DataState from "../../../Store/data.state";
import { GoLiveCalendarComponent } from "../go-live-calendar/go-live-calendar.component";

@Component({
  selector: "app-go-live",
  templateUrl: "./go-live.component.html",
  styleUrls: ["./go-live.component.scss"],
})
export class GoLiveComponent implements OnInit {
  @ViewChild(GoLiveCalendarComponent,  { static: false })
  goLiveCalendar: GoLiveCalendarComponent; 
  public pageTitle: string = "Lottery Go-Live Calendar";
  public calendarData: any[];
  isSticky(column: string): boolean {
    return column === "Project" ? true : false;
  }
  customerActiveProjects;
  rndProjects;
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
          this.customerActiveProjects = this.DataLists[0].customer.projectList.Active;
          this.rndProjects = this.DataLists[0].rnd.projectList.Active;
          let lotteryProjects = [
            ...this.customerActiveProjects,
            ...this.rndProjects,
          ];
          this.calendarData = lotteryProjects.map((item) => {
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

  exportGoliveCalendar(event) {
    this.goLiveCalendar.exportAsExcelFile()
  }
}
