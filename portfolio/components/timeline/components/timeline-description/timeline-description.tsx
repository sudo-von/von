import { FC, PropsWithChildren } from "react";
import Typography from "../../../typography/typography";

const TimelineDescription: FC<PropsWithChildren> = ({ children }) => {
  return <Typography weight="light">{children}</Typography>;
};

export default TimelineDescription;
