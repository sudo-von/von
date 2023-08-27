export type TypographyColor =
  | "dark"
  | "error"
  | "light"
  | "normal"
  | "success";

export type TypographyComponent =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "small"
  | "span";

export type TypographySize =
  | "huge"
  | "large"
  | "medium"
  | "normal"
  | "small"
  | "tiny";

export type TypographySpacing =
  | "normal"
  | "wide";

export type TypographyWeight =
  | "bold"
  | "light"
  | "normal";

export type TypographyWhitespace =
  | "normal"
  | "pre";

export type TypographyOption<T extends string> = {
  [key in T]: string;
};
