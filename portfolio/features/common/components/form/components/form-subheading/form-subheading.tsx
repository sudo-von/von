import { FC, PropsWithChildren } from "react";
import Typography from "../../../typography/typography";

const FormSubheading: FC<PropsWithChildren> = ({ children }) => {
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

export default FormSubheading;
