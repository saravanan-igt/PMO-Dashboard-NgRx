import { Component, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { select, Store } from "@ngrx/store";
import DataState from "../../../Store/data.state";

@Component({
  selector: "app-gaming-go-live",
  templateUrl: "./gaming-go-live.component.html",
  styleUrls: ["./gaming-go-live.component.scss"],
})
export class GamingGoLiveComponent implements OnInit {
  public pageTitle: string = "Casino Go-Live Calendar";
  gameProjectData;
  calendarData;
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
          let gamingProjects = [
            ...this.gameProjectData.sd.projects.active,
            ...this.gameProjectData.rnd.projects.active,
          ];
          this.calendarData = gamingProjects.map((item) => {
            let data = item.LIVE_DATE.split("/");
            let year = data[2].split("")[2] + "" + data[2].split("")[3];
            return {
              ...item,
              BUSINESS_TYPE:
                item.BUSINESS_TYPE === "R&D" ? "PD" : item.BUSINESS_TYPE,
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
      });
  }
}
