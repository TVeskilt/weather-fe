export enum SortDirection {
  ASC = "asc",
  DESC = "desc",
}
export interface PaginatedResponse<T> {
  count: number;
  rows: T[];
}

export interface PaginatedRequest {
  pageSize: number;
  sortBy: string;
  page: number;
  direction: SortDirection;
}
