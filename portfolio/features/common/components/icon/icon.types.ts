export type IconColor = 
  | "error"
  | "success";

export type IconOption<T extends string> = {
  [key in T]: string;
};
