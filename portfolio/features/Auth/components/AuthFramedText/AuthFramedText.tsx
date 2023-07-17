import { FC, PropsWithChildren } from "react";
import Typography from "../../../../components/Typography/Typography";

const AuthFramedText: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-1 border-t border-secondary-variant" />
      <Typography color="secondary" weight="light">
        {children}
      </Typography>
      <div className="flex flex-1 border-t border-secondary-variant" />
    </div>
  );
};

export default AuthFramedText;
