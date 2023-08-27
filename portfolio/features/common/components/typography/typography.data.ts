import {
  TypographySize,
  TypographyColor,
  TypographyWeight,
  TypographyOption,
  TypographySpacing,
  TypographyWhitespace,
} from "./typography.types";

export const typographyColor: TypographyOption<TypographyColor> = {
  dark: "text-slate-850",
  error: "text-red-150",
  light: "text-slate-50",
  normal: "text-slate-550",
  success: "text-green-150",
};

export const typographySize: TypographyOption<TypographySize> = {
  huge: "text-4xl",
  large: "text-xl",
  medium: "text-lg",
  normal: "text-base",
  small: "text-sm",
  tiny: "text-xs",
};

export const typographySpacing: TypographyOption<TypographySpacing> = {
  normal: "tracking-normal",
  wide: "tracking-wide",
};

export const typographyWeight: TypographyOption<TypographyWeight> = {
  bold: "font-bold",
  light: "font-light",
  normal: "font-normal",
};

export const typographyWhitespace: TypographyOption<TypographyWhitespace> = {
  normal: "whitespace-normal",
  pre: "whitespace-pre-line",
};
