import { FC, ReactNode } from "react";
import Label from "../../../label/label";

export type InputHintWrapperProps = {
  hint?: string;
  htmlFor?: string;
  children: ReactNode;
  error?: string | null;
};

const InputHintWrapper: FC<InputHintWrapperProps> = ({
  hint,
  error,
  htmlFor,
  children,
}) => {
  if (!hint) return children;
  const color = error ? "error" : "normal";
  return (
    <div className="flex flex-col gap-1">
      {children}
      <Label
        htmlFor={htmlFor}
        color={color}
        size="tiny"
        spacing="wide"
        weight="light"
      >
        {hint}
      </Label>
    </div>
  );
};

export default InputHintWrapper;
