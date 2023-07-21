import { FC, ReactNode } from "react";
import Typography from "../../../typography/typography";

export type InputLabelWrapperProps = {
  label?: string;
  children: ReactNode;
};

const InputLabelWrapper: FC<InputLabelWrapperProps> = ({ label, children }) => {
  if (!label) return children;
  return (
    <div className="flex flex-col gap-1">
      <Typography color="slate" spacing="wide" variant="legend" weight="light">
        {label}
      </Typography>
      {children}
    </div>
  );
};

export default InputLabelWrapper;
