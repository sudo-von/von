import { FC, PropsWithChildren } from "react";
import Typography from "../typography/typography";

const Title: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
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

export default Title;
