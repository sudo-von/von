export type LabelColor =
  | "error"
  | "normal";

export type LabelSize =
  | "small"
  | "tiny";

export type LabelSpacing =
  | "wide";

export type LabelWeight =
  | "light";

export type LabelOption<T extends string> = {
  [key in T]: string;
};
