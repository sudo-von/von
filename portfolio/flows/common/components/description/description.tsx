import { FC, PropsWithChildren } from "react";
import Typography from "../typography/typography";

const Description: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="neutral"
      component="p"
      size="normal"
      weight="light"
      whitespace="pre"
    >
      {children}
    </Typography>
  );
};

export default Description;
