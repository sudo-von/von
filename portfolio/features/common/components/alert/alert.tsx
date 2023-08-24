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
  const { icon, color } = alertVariants[variant];
  return (
    <div className="flex justify-center items-center gap-2 border rounded p-2">
      <Icon color={color} icon={icon} />
      <Typography color={color} component="p" size="small" weight="light">
        {children}
      </Typography>
    </div>
  );
};

export default Alert;
