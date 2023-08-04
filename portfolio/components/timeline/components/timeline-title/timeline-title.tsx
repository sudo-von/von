import { FC, PropsWithChildren } from "react";
import Typography from "../../../typography/typography";

const TimelineTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="black"
      component="h5"
      spacing="wide"
      variant="paragraph"
      weight="regular"
      whitespace="pre"
    >
      {children}
    </Typography>
  );
};

export default TimelineTitle;
