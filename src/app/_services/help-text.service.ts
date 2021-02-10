import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class HelpTextService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getHelpText() {
    return this.http.get(`../assets/data/helpText.json`);
  }

  updateHelpText(data) {
    return this.http.put(`${this.baseUrl}/UpdateHelptext`, data);
  }

  updateHighVisibilityProject(data) {
    return this.http.put(`${this.baseUrl}/UpdateKeyProjectIndicator`, data);
  }
}
