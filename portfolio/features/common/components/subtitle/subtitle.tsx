import { FC, PropsWithChildren } from "react";
import Typography from "../typography/typography";

const Subtitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="black"
      component="h2"
      variant="subtitle"
      weight="light"
      whitespace="pre"
    >
      {children}
    </Typography>
  );
};

export default Subtitle;
