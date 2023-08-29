import { FC, PropsWithChildren } from "react";
import Typography from "../../../typography/typography";

const FooterSubtitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="dark"
      component="h2"
      size="normal"
      weight="light"
      whitespace="pre"
    >
      {children}
    </Typography>
  );
};

export default FooterSubtitle;
