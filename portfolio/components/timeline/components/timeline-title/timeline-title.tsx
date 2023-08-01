import { FC, PropsWithChildren } from "react";
import Typography from "../../../typography/typography";

const TimelineTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="black"
      component="h4"
      spacing="wide"
      variant="subtitle"
      weight="regular"
    >
      {children}
    </Typography>
  );
};

export default TimelineTitle;
