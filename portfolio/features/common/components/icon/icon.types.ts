export type IconColor = 
  | "error"
  | "normal"
  | "success";

export type IconOption<T extends string> = {
  [key in T]: string;
};
