import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../common/components/typography/typography";

const Description: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="dark"
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
