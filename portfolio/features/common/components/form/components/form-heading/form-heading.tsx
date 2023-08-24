import { FC, PropsWithChildren } from "react";
import Typography from "../../../typography/typography";

const FormHeading: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      align="center"
      color="dark"
      component="h1"
      size="medium"
      weight="normal"
      whitespace="pre"
    >
      {children}
    </Typography>
  );
};

export default FormHeading;
