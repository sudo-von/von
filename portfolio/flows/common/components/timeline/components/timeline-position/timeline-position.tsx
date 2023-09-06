import { FC, PropsWithChildren } from "react";
import Typography from "@common/components/typography/typography";

const TimelinePosition: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="normal"
      component="h6"
      size="small"
      spacing="normal"
      weight="light"
      whitespace="pre"
    >
      {children}
    </Typography>
  );
};

export default TimelinePosition;
