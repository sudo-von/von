import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../../components/Typography/Typography";

const AuthDescription: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography weight="light" align="center" color="secondary">
      {children}
    </Typography>
  );
};

export default AuthDescription;
