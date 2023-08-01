import { FC, PropsWithChildren } from "react";
import Typography from "../../../typography/typography";

const TimelineTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography spacing="wide" component="h4">
      {children}
    </Typography>
  );
};

export default TimelineTitle;
