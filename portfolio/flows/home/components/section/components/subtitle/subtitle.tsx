import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../common/components/typography/typography";

const Subtitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="dark"
      component="h2"
      size="medium"
      weight="light"
      whitespace="pre"
    >
      {children}
    </Typography>
  );
};

export default Subtitle;
