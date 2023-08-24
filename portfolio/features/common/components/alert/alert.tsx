import { FC, ReactNode } from "react";
import Typography from "../typography/typography";
import { AiFillCloseCircle } from "react-icons/ai";

type AlertVariant = "error" | "success";

type AlertProps = {
  variant: AlertVariant;
  children: ReactNode;
};

const options = {
  error: "border-red-150 text-red-150",
  success: "border-green-150 text-green-150",
};

const Alert: FC<AlertProps> = ({ variant, children }) => {
  const className = options[variant];
  return (
    <div
      className={`flex flex-row justify-center items-center gap-2 border rounded p-3 ${className}`}
    >
      <AiFillCloseCircle className="text-2xl" />
      <Typography align="center" component="p" size="small" weight="light">
        {children}
      </Typography>
    </div>
  );
};

export default Alert;
