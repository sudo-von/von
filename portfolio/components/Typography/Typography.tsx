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
} from "./Typography.types";

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
    white: "text-white",
    black: "text-slate-850",
    slate: "text-slate-550",
  },
  variant: {
    heading: "text-6xl",
    title: "text-2xl",
    subtitle: "text-xl",
    paragraph: "text-base",
    caption: "text-sm",
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
    pre: "whitespace-pre",
  },
};

const Typography: React.FC<TypographyProps> = ({
  children,
  component = "p",
  align = "start",
  color = "black",
  weight = "regular",
  spacing = "normal",
  variant = "paragraph",
  whitespace = "normal",
}) => {
  const Component = component;

  const alignClassName = options.align[align];
  const colorClassName = options.color[color];
  const variantClassName = options.variant[variant];
  const spacingClassName = options.spacing[spacing];
  const weightClassName = options.weight[weight];
  const whitespaceClassName = options.whitespace[whitespace];

  const className = `${alignClassName} ${colorClassName} ${variantClassName} ${spacingClassName} ${weightClassName} ${whitespaceClassName}`;

  return <Component className={className}>{children}</Component>;
};

export default Typography;
