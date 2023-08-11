export type StrapiPagination = {
  page: number;
  total: number;
  pageSize: number;
  pageCount: number;
}

export type StrapiMeta = {
  pagination: StrapiPagination;
}

export type StrapiData<T> = {
  id: number;
  attributes: T;
}

export type StrapiResponse<T> = {
  data: T;
  meta: StrapiMeta;
};