import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";

import { User } from "../_models";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  baseUrl = environment.baseUrl;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(sessionStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  //   /users/authenticate
  login(username: string, password: string) {
    return this.http
      .post<any>(`${this.baseUrl}/Getlogin`, { username, password })
      .pipe(
        map((user) => {
          sessionStorage.setItem("currentUser", JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    sessionStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }
}
