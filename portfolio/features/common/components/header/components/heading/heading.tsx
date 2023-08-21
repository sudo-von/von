import { FC, PropsWithChildren } from "react";
import Typography from "../../../typography/typography";

const Heading: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      align="center"
      color="black"
      component="h1"
      variant="title"
      weight="regular"
      whitespace="pre"
    >
      {children}
    </Typography>
  );
};

export default Heading;
