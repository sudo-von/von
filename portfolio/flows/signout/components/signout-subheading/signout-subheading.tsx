import { FC, PropsWithChildren } from "react";
import Typography from "@common/components/typography/typography";

const SignoutSubheading: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="normal"
      component="h2"
      size="small"
      spacing="normal"
      weight="light"
      whitespace="normal"
    >
      {children}
    </Typography>
  );
};

export default SignoutSubheading;
