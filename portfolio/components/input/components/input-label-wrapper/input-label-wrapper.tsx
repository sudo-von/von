import { FC, ReactNode } from "react";
import Typography from "../../../typography/typography";

export type InputLabelWrapperProps = {
  label?: string;
  error?: boolean;
  children: ReactNode;
};

const InputLabelWrapper: FC<InputLabelWrapperProps> = ({
  label,
  error,
  children,
}) => {
  if (!label) return children;
  const color = error ? "red" : "slate";
  return (
    <div className="flex flex-col gap-1">
      <Typography color={color} spacing="wide" variant="legend" weight="light">
        {label}
      </Typography>
      {children}
    </div>
  );
};

export default InputLabelWrapper;
