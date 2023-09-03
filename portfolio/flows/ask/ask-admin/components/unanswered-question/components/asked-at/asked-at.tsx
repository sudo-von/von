import { FC, PropsWithChildren } from "react";
import Typography from "@common/components/typography/typography";

const AskedAt: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="normal"
      component="small"
      size="tiny"
      spacing="normal"
      weight="light"
      whitespace="normal"
    >
      {children}
    </Typography>
  );
};

export default AskedAt;
