import { FC, PropsWithChildren } from "react";
import Button from "../../../../components/Button/Button";
import Typography from "../../../../components/Typography/Typography";

const AuthButton: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Button>
      <Typography color="white" align="center">
        {children}
      </Typography>
    </Button>
  );
};

export default AuthButton;
