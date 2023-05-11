export interface BasicPageParams {
  pageNumber: number;
  pageSize: number;
}

export interface BasicFetchResult<T> {
  rows: T[];
  total: number;
}
