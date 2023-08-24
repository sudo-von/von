import { TbBriefcase } from "react-icons/tb";
import { FC, PropsWithChildren } from "react";
import Typography from "../../../typography/typography";

const TimelinePosition: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-row gap-2 items-center justify-center lg:justify-start">
      <TbBriefcase className="text-slate-850" />
      <Typography
        color="dark"
        component="h6"
        size="normal"
        weight="light"
        whitespace="pre"
      >
        {children}
      </Typography>
    </div>
  );
};

export default TimelinePosition;
