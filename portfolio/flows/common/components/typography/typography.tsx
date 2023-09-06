import { ReactNode } from "react";
import {
  typographySize,
  typographyColor,
  typographyWeight,
  typographySpacing,
  typographyWhitespace,
} from "@common/components/typography/typography.data";
import {
  TypographySize,
  TypographyColor,
  TypographyWeight,
  TypographySpacing,
  TypographyComponent,
  TypographyWhitespace,
} from "@common/components/typography/typography.types";

export type TypographyProps = {
  children: ReactNode;
  size?: TypographySize;
  color?: TypographyColor;
  weight?: TypographyWeight;
  spacing?: TypographySpacing;
  component?: TypographyComponent;
  whitespace?: TypographyWhitespace;
};

const Typography: React.FC<TypographyProps> = ({
  children,
  component = "p",
  color = "normal",
  size = "normal",
  spacing = "normal",
  weight = "normal",
  whitespace = "normal",
}) => {
  const Component = component;

  const className = `${typographyColor[color]} ${typographySize[size]} ${typographySpacing[spacing]} ${typographyWeight[weight]} ${typographyWhitespace[whitespace]}`;

  return <Component className={className}>{children}</Component>;
};

export default Typography;
