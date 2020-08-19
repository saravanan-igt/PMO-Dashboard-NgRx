import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import * as DataActions from "./data.action";
import { DataHttpService } from "./data.httpservice";

@Injectable()
export class DataEffects {
  constructor(private dataService: DataHttpService, private action$: Actions) {}

  GetDatas$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(DataActions.BeginGetDataAction),
      mergeMap((action) =>
        this.dataService.getDatas().pipe(
          map((data: any[]) => {
            return DataActions.SuccessGetDataAction({ payload: data });
          }),
          catchError((error: Error) => {
            console.log("error", error);
            return of(DataActions.ErrorDataAction(error));
          })
        )
      )
    )
  );

  CreateDatas$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(DataActions.BeginCreateDataAction),
      mergeMap((action) =>
        this.dataService.createDatas(action.payload).pipe(
          map((data: any) => {
            return DataActions.SuccessCreateDataAction({ payload: data });
          }),
          catchError((error: Error) => {
            return of(DataActions.ErrorDataAction(error));
          })
        )
      )
    )
  );
}
