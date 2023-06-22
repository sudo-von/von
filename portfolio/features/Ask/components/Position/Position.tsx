import React, { FC, ReactNode } from "react";
import Typography from "../../../../components/Typography/Typography";

type Props = {
  children: ReactNode;
};

const Position: FC<Props> = ({ children }) => {
  return (
    <Typography variant="h2" weight="regular" size="normal">
      {children}
    </Typography>
  );
};

export default Position;
