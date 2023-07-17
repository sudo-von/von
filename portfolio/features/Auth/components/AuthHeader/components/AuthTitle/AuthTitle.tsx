import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../../components/Typography/Typography";

const AuthTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography size="big" align="center">
      {children}
    </Typography>
  );
};

export default AuthTitle;
