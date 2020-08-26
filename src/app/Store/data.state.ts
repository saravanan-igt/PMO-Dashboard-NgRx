export default class DataState {
  Data: Array<any>;
  DataError: Error;
  LastUpdatedDate: string;
}
export const initializeState = (): DataState => {
  return { Data: Array<any>(), DataError: null, LastUpdatedDate: null };
};
