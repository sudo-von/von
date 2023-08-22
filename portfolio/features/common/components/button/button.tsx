import { ComponentPropsWithoutRef, FC } from "react";
import Typography from "../typography/typography";

type ButtonProps = Pick<
  ComponentPropsWithoutRef<"button">,
  "children" | "disabled" | "onClick" | "type"
>;

const Button: FC<ButtonProps> = ({ children, disabled, onClick, type }) => {
  const borderClassName = "border-b-4 border-slate-900";
  const backgroundClassName = "bg-slate-850 hover:bg-slate-900";
  const textClassName = "text-slate-50 text-base text-center font-normal";
  const disabledClassName = disabled ? "opacity-30 cursor-not-allowed" : "";
  const className = `${borderClassName} ${backgroundClassName} ${textClassName} ${disabledClassName} rounded p-3`;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
