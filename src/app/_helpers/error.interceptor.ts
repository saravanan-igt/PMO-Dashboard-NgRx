import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { AuthenticationService } from "../_services";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        console.log("err", err);
        if (err.status === 401 || err.status === 0) {
          // auto logout if 401 response returned from api
          this.authenticationService.logout();
          //location.reload(true);
        }
        let errMessage =
          err.error.message === undefined ? "Login Failed" : err.error.message;
        console.log("errMessage", errMessage);
        const error =
          errMessage + ". Invalid Username or Password." || err.statusText;
        return throwError(error);
      })
    );
  }
}
