import { createAction, props } from "@ngrx/store";

export const GetDataAction = createAction("[PMO] - Get Data");

export const CreateDataAction = createAction(
  "[PMO] - Create Data",
  props<any>()
);

export const BeginGetDataAction = createAction("[PMO] Begin Get Data");

export const SetLastUpdatedDateAction = createAction(
  "[PMO] Get Last Updated Date",
  props<{ payload: any }>()
);

export const GetLastUpdatedDateAction = createAction(
  "[PMO] Get Last Updated Date"
);

export const SuccessGetDataAction = createAction(
  "[PMO] Success Get Data",
  props<{ payload: any[] }>()
);

export const BeginCreateDataAction = createAction(
  "[PMO] - Begin Create Data",
  props<{ payload: any }>()
);

export const SuccessCreateDataAction = createAction(
  "[PMO] - Success Create Data",
  props<{ payload: any }>()
);

export const ErrorDataAction = createAction("[PMO] - Error", props<Error>());
