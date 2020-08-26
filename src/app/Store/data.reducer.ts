import { Action, createReducer, on } from "@ngrx/store";
import * as DataActions from "./data.action";
import DataState, { initializeState } from "./data.state";

export const intialState = initializeState();

const reducer = createReducer(
  intialState,
  on(DataActions.GetDataAction, (state) => state),
  on(DataActions.SetLastUpdatedDateAction, (state: DataState, { payload }) => {
    return { ...state, LastUpdatedDate: payload };
  }),
  on(DataActions.GetLastUpdatedDateAction, (state: DataState) => {
    return { ...state };
  }),
  on(DataActions.CreateDataAction, (state: DataState, todo: any) => {
    return { ...state, Data: [...state.Data, todo], DataError: null };
  }),
  on(DataActions.SuccessGetDataAction, (state: DataState, { payload }) => {
    return { ...state, Data: payload };
  }),
  on(DataActions.SuccessCreateDataAction, (state: DataState, { payload }) => {
    return { ...state, Data: [...state.Data, payload], DataError: null };
  }),
  on(DataActions.ErrorDataAction, (state: DataState, error: Error) => {
    console.log(error);
    return { ...state, DataError: error };
  })
);

export function DataReducer(state: DataState | undefined, action: Action) {
  return reducer(state, action);
}
