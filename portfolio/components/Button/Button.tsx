import { ComponentPropsWithoutRef, FC } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;

const Button: FC<ButtonProps> = ({ type, onClick, children, disabled }) => {
  const backgroundClassName = "bg-black-250 hover:bg-black-350";
  const textClassName = "text-white text-base text-center font-normal";
  const disabledClassName = disabled ? "opacity-50 cursor-not-allowed" : "";
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
