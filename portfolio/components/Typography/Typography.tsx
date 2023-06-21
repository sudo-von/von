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
  weight?: keyof typeof typographyWeight;
  spacing?: keyof typeof typographySpacing;
  variant?: TypographyVariant;
};

const typographySpacing = {
  normal: "tracking-normal",
  wide: "tracking-wide",
  wider: "tracking-wider",
};

const typographySize = {
  large: "text-7xl",
  big: "text-2xl",
  medium: "text-xl",
  normal: "text-base",
  small: "text-sm",
};

const typographyWeight = {
  light: "font-light",
  regular: "font-normal",
  bold: "font-bold",
};

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "p",
  size = "normal",
  weight = "regular",
  spacing = "normal",
}) => {
  const Component = variant;
  const className = `${typographySpacing[spacing]} ${typographySize[size]} ${typographyWeight[weight]}`;
  return <Component className={className}>{children}</Component>;
};

export default Typography;
