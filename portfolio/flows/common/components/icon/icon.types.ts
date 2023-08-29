export type IconColor =
  | "dark"
  | "error"
  | "normal"
  | "success";

export type IconOption<T extends string> = {
  [key in T]: string;
};
