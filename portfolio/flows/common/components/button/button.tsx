import { ComponentPropsWithoutRef, FC } from "react";
import ButtonContent, {
  ButtonContentProps,
} from "./components/button-content/button-content";

type ButtonProps = Pick<
  ComponentPropsWithoutRef<"button">,
  "children" | "disabled" | "onClick" | "type"
> &
  ButtonContentProps;

const Button: FC<ButtonProps> = ({
  type,
  loading,
  onClick,
  children,
  disabled,
}) => {
  const backgroundClassName = "bg-slate-850 hover:bg-slate-950";
  const disabledClassName = "disabled:opacity-30 disabled:cursor-not-allowed";
  const className = `${backgroundClassName} ${disabledClassName} text-center rounded p-3`;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      <ButtonContent loading={loading}>{children}</ButtonContent>
    </button>
  );
};

export default Button;
