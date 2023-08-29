import { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import {
  LabelSize,
  LabelColor,
  LabelWeight,
  LabelSpacing,
} from "./label.types";
import { labelColor, labelSize, labelSpacing, labelWeight } from "./label.data";

type LabelProps = Pick<ComponentPropsWithoutRef<"label">, "htmlFor"> & {
  size?: LabelSize;
  color?: LabelColor;
  children: ReactNode;
  weight?: LabelWeight;
  spacing?: LabelSpacing;
};

const Label: FC<LabelProps> = ({
  htmlFor,
  children,
  color = "normal",
  size = "tiny",
  spacing = "wide",
  weight = "light",
}) => {
  const className = `${labelColor[color]} ${labelSize[size]} ${labelSpacing[spacing]} ${labelWeight[weight]}`;
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
};

export default Label;
