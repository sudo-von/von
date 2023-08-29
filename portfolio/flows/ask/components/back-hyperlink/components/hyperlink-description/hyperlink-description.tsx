import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../common/components/typography/typography";

const HyperlinkDescription: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="dark"
      component="p"
      size="small"
      spacing="normal"
      weight="light"
      whitespace="normal"
    >
      {children}
    </Typography>
  );
};

export default HyperlinkDescription;
