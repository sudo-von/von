export type StrapiPagination = {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
};

export type StrapiMeta = {
  pagination: StrapiPagination;
};

export type StrapiData<T> = {
  attributes: T;
  id: number;
};

export type StrapiAPIResponse<T> = {
  data: T;
  meta: StrapiMeta;
};
