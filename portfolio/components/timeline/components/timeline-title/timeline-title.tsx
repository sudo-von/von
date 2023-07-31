import { FC, PropsWithChildren } from "react";
import Typography from "../../../typography/typography";

const TimelineTitle: FC<PropsWithChildren> = ({ children }) => {
  return <Typography spacing="wide">{children}</Typography>;
};

export default TimelineTitle;
