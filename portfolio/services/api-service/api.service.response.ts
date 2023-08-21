export type APIError = {
  error: string;
};

export type APIOptions = {
  port: number;
  base?: string;
  version?: number;
};

export type APIResponse<T> = {
  result: T;
};