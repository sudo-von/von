import { FC, PropsWithChildren } from "react";
import Typography from "../../../typography/typography";

const FooterTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="dark"
      component="h1"
      size="large"
      weight="normal"
      whitespace="pre"
    >
      {children}
    </Typography>
  );
};

export default FooterTitle;
