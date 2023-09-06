import { FC, ReactNode } from "react";
import Typography from "@common/components/typography/typography";
import { AlertVariant } from "@common/components/alert/alert.types";

type AlertProps = {
  children: ReactNode;
  variant: AlertVariant;
};

const Alert: FC<AlertProps> = ({ variant, children }) => {
  return (
    <div className="flex flex-col justify-center items-center border rounded text-center gap-2 p-2">
      <Typography color={variant} component="p" size="small" weight="light">
        {children}
      </Typography>
    </div>
  );
};

export default Alert;
