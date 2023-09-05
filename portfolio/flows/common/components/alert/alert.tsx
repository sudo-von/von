import { FC, ReactNode } from "react";
import { alertVariants } from "./alert.data";
import { AlertVariant } from "./alert.types";
import Icon from "../icon/icon";
import Typography from "../typography/typography";

type AlertProps = {
  children: ReactNode;
  variant: AlertVariant;
};

const Alert: FC<AlertProps> = ({ variant, children }) => {
  const { color } = alertVariants[variant];
  return (
    <div className="flex justify-center items-center gap-2 p-2 border rounded text-center">
      <Typography color={color} component="p" size="small" weight="light">
        {children}
      </Typography>
    </div>
  );
};

export default Alert;
