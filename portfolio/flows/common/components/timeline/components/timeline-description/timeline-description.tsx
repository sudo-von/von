import { FC, PropsWithChildren } from "react";
import Typography from "@common/components/typography/typography";

const TimelineDescription: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="normal"
      component="p"
      size="small"
      spacing="wide"
      weight="light"
      whitespace="pre"
    >
      {children}
    </Typography>
  );
};

export default TimelineDescription;
