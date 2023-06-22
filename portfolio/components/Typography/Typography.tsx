import { ReactNode } from "react";

type TypographyVariant =
  | "p"
  | "span"
  | "small"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

type TypographyProps = {
  children: ReactNode;
  size?: keyof typeof typographySize;
  align?: keyof typeof typographyAlign;
  weight?: keyof typeof typographyWeight;
  spacing?: keyof typeof typographySpacing;
  whitespace?: keyof typeof typographyWhitespace;
  variant?: TypographyVariant;
};

const typographySize = {
  huge: "text-7xl",
  large: "text-4xl",
  big: "text-2xl",
  medium: "text-xl",
  normal: "text-base",
  small: "text-sm",
};

const typographyAlign = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
  start: "text-start",
  end: "text-end",
};

const typographyWeight = {
  light: "font-light",
  regular: "font-normal",
  bold: "font-bold",
};

const typographySpacing = {
  normal: "tracking-normal",
  wide: "tracking-wide",
  wider: "tracking-wider",
};

const typographyWhitespace = {
  normal: "whitespace-normal",
  pre: "whitespace-pre",
  line: "whitespace-pre-line",
};

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "p",
  size = "normal",
  align = "start",
  weight = "regular",
  spacing = "normal",
  whitespace = "normal",
}) => {
  const Component = variant;
  const className = `${typographySpacing[spacing]} ${typographySize[size]} ${typographyWeight[weight]} ${typographyWhitespace[whitespace]} ${typographyAlign[align]}`;
  return <Component className={className}>{children}</Component>;
};

export default Typography;
