export enum SortDirection {
  ASC = "asc",
  DESC = "desc",
}

interface PageData<T> {
  content: T[];
  totalElements: number;
}
export interface PaginatedResponse<T> {
  data: PageData<T>;
}

export interface PaginatedRequest {
  pageSize: number;
  sortBy: string;
  page: number;
  direction: SortDirection;
}
