import { FC, PropsWithChildren } from "react";
import Typography from "../../../typography/typography";

const FormSubheading: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      align="center"
      color="slate"
      component="h2"
      variant="paragraph"
      weight="light"
      whitespace="pre"
    >
      {children}
    </Typography>
  );
};

export default FormSubheading;
