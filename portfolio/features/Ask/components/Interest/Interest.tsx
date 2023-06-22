import React, { FC, ReactNode } from "react";
import Typography from "../../../../components/Typography/Typography";

type Props = {
  children: ReactNode;
};

const Interest: FC<Props> = ({ children }) => {
  return (
    <Typography variant="h3" weight="light" size="small">
      {children}
    </Typography>
  );
};

export default Interest;
