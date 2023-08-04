import { FC, PropsWithChildren } from "react";
import Typography from "../typography/typography";

const Banner: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="black"
      component="h1"
      variant="banner"
      weight="bold"
      whitespace="pre"
    >
      {children}
    </Typography>
  );
};

export default Banner;
