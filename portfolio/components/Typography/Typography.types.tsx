export type TypographyAlign = "center" | "start";

export type TypographyColor = "white" | "black" | "slate";

export type TypographyComponent =
  | "p"
  | "span"
  | "small"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

export type TypographyVariant =
  | "heading"
  | "title"
  | "subtitle"
  | "paragraph"
  | "caption";

export type TypographySpacing = "normal" | "wide";

export type TypographyWeight = "light" | "regular" | "bold";

export type TypographyWhitespace = "normal" | "pre";

export type TypographyOptions = {
  align: {
    [key in TypographyAlign]: string;
  };
  color: {
    [key in TypographyColor]: string;
  };
  spacing: {
    [key in TypographySpacing]: string;
  };
  variant: {
    [key in TypographyVariant]: string;
  };
  weight: {
    [key in TypographyWeight]: string;
  };
  whitespace: {
    [key in TypographyWhitespace]: string;
  };
};