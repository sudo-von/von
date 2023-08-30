import { FC, PropsWithChildren } from "react";
import Typography from "../../../typography/typography";

const Title: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="normal"
      component="small"
      spacing="normal"
      size="normal"
      weight="light"
      whitespace="pre"
    >
      {children}
    </Typography>
  );
};

export default Title;
