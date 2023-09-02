import { FC, PropsWithChildren } from "react";
import Typography from "@common/components/typography/typography";

const SignoutHeading: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="dark"
      component="h1"
      size="normal"
      spacing="normal"
      weight="normal"
      whitespace="normal"
    >
      {children}
    </Typography>
  );
};

export default SignoutHeading;
