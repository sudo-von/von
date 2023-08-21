import { FC, PropsWithChildren } from "react";
import Typography from "../../../typography/typography";

const Subheading: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      align="center"
      color="slate"
      component="h2"
      variant="subtitle"
      weight="light"
      whitespace="pre"
    >
      {children}
    </Typography>
  );
};

export default Subheading;
