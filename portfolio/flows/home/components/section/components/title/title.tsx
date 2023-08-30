import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../common/components/typography/typography";

const Title: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="dark"
      component="h1"
      size="large"
      weight="normal"
      whitespace="pre"
    >
      {children}
    </Typography>
  );
};

export default Title;
