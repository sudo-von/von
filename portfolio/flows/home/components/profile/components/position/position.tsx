import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../common/components/typography/typography";

const Interest: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="dark"
      component="h2"
      size="medium"
      spacing="normal"
      weight="normal"
      whitespace="pre"
    >
      {children}
    </Typography>
  );
};

export default Interest;
