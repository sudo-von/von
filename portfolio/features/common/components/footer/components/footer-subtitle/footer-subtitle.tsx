import { FC, PropsWithChildren } from "react";
import Typography from "../../../typography/typography";

const FooterSubtitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="black"
      component="h2"
      variant="paragraph"
      weight="light"
      whitespace="pre"
    >
      {children}
    </Typography>
  );
};

export default FooterSubtitle;
