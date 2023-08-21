export type APIError = {
  code: string;
  error: string;
};

export type APIOptions = {
  base: string;
  port: number;
  version?: number;
};

export type APIResponse<T> = {
  result: T;
};