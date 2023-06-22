import React, { FC, ReactNode } from "react";
import Typography from "../../../../components/Typography/Typography";

type Props = {
  children: ReactNode;
};

const Name: FC<Props> = ({ children }) => {
  return (
    <Typography variant="h1" weight="bold" size="large">
      {children}
    </Typography>
  );
};

export default Name;
