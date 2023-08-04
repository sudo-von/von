import { FC, PropsWithChildren } from "react";
import Typography from "../../../typography/typography";

const TimelineDescription: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="slate"
      component="p"
      spacing="wide"
      variant="legend"
      weight="light"
      whitespace="pre"
    >
      {children}
    </Typography>
  );
};

export default TimelineDescription;
