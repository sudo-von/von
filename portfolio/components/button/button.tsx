import { ComponentPropsWithoutRef, FC } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;

const Button: FC<ButtonProps> = ({ type, onClick, children, disabled }) => {
  const backgroundClassName = "bg-slate-850 hover:bg-slate-950";
  const textClassName = "text-slate-50 text-base text-center font-normal";
  const disabledClassName = disabled ? "opacity-40 cursor-not-allowed" : "";
  const className = `${backgroundClassName} ${textClassName} ${disabledClassName} rounded p-3`;
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
