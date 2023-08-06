import { TbBriefcase } from "react-icons/tb";
import { FC, PropsWithChildren } from "react";
import Typography from "../../../typography/typography";

const TimelinePosition: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-row gap-2 items-center justify-center lg:justify-start">
      <TbBriefcase className="text-slate-850" />
      <Typography
        color="black"
        component="h6"
        variant="paragraph"
        weight="light"
        whitespace="pre"
      >
        {children}
      </Typography>
    </div>
  );
};

export default TimelinePosition;
