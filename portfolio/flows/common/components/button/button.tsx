import { ComponentPropsWithoutRef, FC } from "react";
import ButtonContent, { ButtonContentProps } from "@common/components/button/components/button-content/button-content";

type ButtonProps = Pick<
  ComponentPropsWithoutRef<"button">,
  "children" | "disabled" | "onClick" | "type"
> & ButtonContentProps;

const Button: FC<ButtonProps> = ({
  children,
  disabled,
  loading,
  onClick,
  type,
}) => {
  const backgroundClassName = "bg-slate-850 hover:bg-slate-950";
  const disabledClassName = "disabled:opacity-30 disabled:cursor-not-allowed";
  const className = `${backgroundClassName} ${disabledClassName} text-center rounded p-3`;
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      <ButtonContent loading={loading}>{children}</ButtonContent>
    </button>
  );
};

export default Button;
