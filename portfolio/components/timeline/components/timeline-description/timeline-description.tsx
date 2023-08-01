import { FC, PropsWithChildren } from "react";
import Typography from "../../../typography/typography";

const TimelineDescription: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography color="black" component="h6" variant="caption" weight="light">
      {children}
    </Typography>
  );
};

export default TimelineDescription;
