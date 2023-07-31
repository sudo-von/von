import { ReactNode } from "react";
import {
  TypographyAlign,
  TypographyColor,
  TypographyWeight,
  TypographyOptions,
  TypographySpacing,
  TypographyVariant,
  TypographyComponent,
  TypographyWhitespace,
} from "./typography.types";

type TypographyProps = {
  children: ReactNode;
  align?: TypographyAlign;
  color?: TypographyColor;
  weight?: TypographyWeight;
  spacing?: TypographySpacing;
  variant?: TypographyVariant;
  component?: TypographyComponent;
  whitespace?: TypographyWhitespace;
};

const options: TypographyOptions = {
  align: {
    center: "text-center",
    start: "text-start",
  },
  color: {
    red: "text-red-150",
    white: "text-slate-50",
    black: "text-slate-850",
    slate: "text-slate-550",
  },
  variant: {
    banner: "text-3xl sm:text-5xl lg:text-6xl",
    heading: "text-xl sm:text-3xl text-4xl",
    title: "text-lg sm:text-xl lg:text-2xl",
    subtitle: "text-base sm:text-lg lg:text-xl",
    paragraph: "text-xs sm:text-base lg:text-base",
    caption: "text-sm",
    legend: "text-xs",
  },
  spacing: {
    normal: "tracking-normal",
    wide: "tracking-wide",
  },
  weight: {
    light: "font-light",
    regular: "font-normal",
    bold: "font-bold",
  },
  whitespace: {
    normal: "whitespace-normal",
    pre: "whitespace-pre-line",
  },
};

const Typography: React.FC<TypographyProps> = ({
  align,
  children,
  component = "p",
  color = "black",
  weight = "regular",
  spacing = "normal",
  variant = "paragraph",
  whitespace = "normal",
}) => {
  const Component = component;

  const alignClassName = align ? options.align[align] : "";
  const colorClassName = options.color[color];
  const variantClassName = options.variant[variant];
  const spacingClassName = options.spacing[spacing];
  const weightClassName = options.weight[weight];
  const whitespaceClassName = options.whitespace[whitespace];

  const className = `${alignClassName} ${colorClassName} ${variantClassName} ${spacingClassName} ${weightClassName} ${whitespaceClassName}`;

  return <Component className={className}>{children}</Component>;
};

export default Typography;
