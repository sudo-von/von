import { FC, ReactNode } from "react";

type LabelProps = {
  htmlFor?: string;
  children: ReactNode;
  error?: string | null;
};

const Label: FC<LabelProps> = ({ htmlFor, children, error }) => {
  const colorClassName = error ? "text-red-200" : "text-slate-550";
  const textClassName = "text-xs tracking-wide font-light";
  const className = `${colorClassName} ${textClassName}`;
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
};

export default Label;
