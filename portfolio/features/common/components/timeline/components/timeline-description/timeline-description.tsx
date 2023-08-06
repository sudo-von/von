import { FC, PropsWithChildren } from "react";
import Description from "../../../description/description";

const TimelineDescription: FC<PropsWithChildren> = ({ children }) => {
  return <Description>{children}</Description>;
};

export default TimelineDescription;
