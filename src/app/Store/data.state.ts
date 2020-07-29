export default class DataState {
  Data: Array<any>;
  DataError: Error;
}
export const initializeState = (): DataState => {
  return { Data: Array<any>(), DataError: null };
};
