import { FC, ReactNode } from "react";
import Typography from "../../../typography/typography";

export type InputHintWrapperProps = {
  hint?: string;
  error?: boolean;
  children: ReactNode;
};

const InputHintWrapper: FC<InputHintWrapperProps> = ({
  hint,
  error,
  children,
}) => {
  if (!hint) return children;
  const color = error ? "red" : "slate";
  return (
    <div className="flex flex-col gap-1">
      {children}
      <Typography color={color} spacing="wide" variant="legend" weight="light">
        {hint}
      </Typography>
    </div>
  );
};

export default InputHintWrapper;
