import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../common/components/typography/typography";

const Name: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="dark"
      component="h1"
      size="large"
      spacing="normal"
      weight="bold"
      whitespace="normal"
    >
      {children}
    </Typography>
  );
};

export default Name;
