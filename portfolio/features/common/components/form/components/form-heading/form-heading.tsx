import { FC, PropsWithChildren } from "react";
import Typography from "../../../typography/typography";

const FormHeading: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      align="center"
      color="black"
      component="h1"
      variant="subtitle"
      weight="regular"
      whitespace="pre"
    >
      {children}
    </Typography>
  );
};

export default FormHeading;
