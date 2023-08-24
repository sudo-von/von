import { FC, PropsWithChildren } from "react";
import Typography from "../../../typography/typography";

const FormSubheading: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      align="center"
      color="neutral"
      component="h2"
      size="normal"
      weight="light"
      whitespace="pre"
    >
      {children}
    </Typography>
  );
};

export default FormSubheading;
