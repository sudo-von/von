import { FC, PropsWithChildren } from "react";
import Typography from "@common/components/typography/typography";

const Interest: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="dark"
      component="h3"
      size="small"
      spacing="normal"
      weight="light"
      whitespace="normal"
    >
      {children}
    </Typography>
  );
};

export default Interest;
