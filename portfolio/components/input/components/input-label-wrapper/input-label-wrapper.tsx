import { FC, ReactNode } from "react";
import Label from "../../../label/label";

export type InputLabelWrapperProps = {
  label?: string;
  htmlFor?: string;
  children: ReactNode;
  error?: string | null;
};

const InputLabelWrapper: FC<InputLabelWrapperProps> = ({
  label,
  error,
  htmlFor,
  children,
}) => {
  if (!label) return children;
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={htmlFor} error={error}>
        {label}
      </Label>
      {children}
    </div>
  );
};

export default InputLabelWrapper;
