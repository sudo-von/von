import { FC, PropsWithChildren } from "react";
import Typography from "../../../typography/typography";

const FooterDescription: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="slate"
      component="p"
      variant="paragraph"
      weight="light"
      whitespace="pre"
    >
      {children}
    </Typography>
  );
};

export default FooterDescription;
