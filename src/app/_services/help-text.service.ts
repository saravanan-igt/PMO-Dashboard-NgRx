import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HelpTextService {
  constructor(private http: HttpClient) {}

  getHelpText() {
    return this.http.get(`../assets/data/helpText.json`);
  }
}
