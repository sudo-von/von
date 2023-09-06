import { FC, PropsWithChildren } from "react";
import Typography from "@common/components/typography/typography";

const TimelineCompany: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="dark"
      component="h4"
      size="normal"
      spacing="normal"
      weight="normal"
      whitespace="pre"
    >
      {children}
    </Typography>
  );
};

export default TimelineCompany;
