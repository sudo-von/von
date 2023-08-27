import { FC, ReactNode } from "react";
import Label from "../../../label/label";

export type InputLabelWrapperProps = {
  label?: string;
  htmlFor?: string;
  children: ReactNode;
  error?: boolean;
};

const InputLabelWrapper: FC<InputLabelWrapperProps> = ({
  label,
  error,
  htmlFor,
  children,
}) => {
  if (!label) return children;
  const color = error ? "error" : "normal";
  return (
    <div className="flex flex-col gap-1">
      <Label
        htmlFor={htmlFor}
        color={color}
        size="tiny"
        spacing="wide"
        weight="light"
      >
        {label}
      </Label>
      {children}
    </div>
  );
};

export default InputLabelWrapper;
