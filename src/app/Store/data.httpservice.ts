import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, forkJoin } from "rxjs";
import { map } from "rxjs/operators";
import Utils from "../shared/utility/utils";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class DataHttpService {
  baseUrl = environment.baseUrl;
  private LotteryApiURL: string = this.baseUrl + "/GetlotteryDetails/lp";
  private LotteryApiURL1 = this.httpclient.get(
    this.baseUrl + "/GetlotteryDetails/lp"
  );
  private CasinoApiURL = this.httpclient.get(
    this.baseUrl + "/GetallDetails/casino"
  );
  private VltApiURL = this.httpclient.get(
    this.baseUrl + "/GetallDetails/Video"
  );
  // http://10.2.230.128:4010/Gethelptext/s
  //../assets/data/helpText.json
  private helpTextURL = this.httpclient.get(`${this.baseUrl}/Gethelptext/s`);

  constructor(private httpclient: HttpClient) {}

  public getAllProjects(): Observable<any[]> {
    return forkJoin([
      this.LotteryApiURL1,
      this.CasinoApiURL,
      this.VltApiURL,
      this.helpTextURL,
    ]);
  }
  public getDatas() {
    return this.getAllProjects().pipe(
      map((response) => {
        return [
          Utils.createLotteryData(response[0]),
          Utils.createCasinoData(response[1]),
          Utils.createVltData(response[2]),
          response[3][0],
        ];
      })
    );
  }

  createDatas(payload: any): Observable<any> {
    return this.httpclient.post<any>(
      this.LotteryApiURL,
      JSON.stringify(payload),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
