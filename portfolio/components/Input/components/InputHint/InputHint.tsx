import { FC, ReactNode } from "react";
import Typography from "../../../Typography/Typography";

type InputHintProps = {
  error?: boolean;
  hint?: string;
  children: ReactNode;
};

const InputHint: FC<InputHintProps> = ({ error, hint, children }) => {
  if (!hint) return children;
  const color = error ? "red" : "slate";
  return (
    <div className="flex flex-col gap-1">
      {children}
      <Typography variant="legend" color={color} weight="light" spacing="wide">
        {hint}
      </Typography>
    </div>
  );
};

export default InputHint;
