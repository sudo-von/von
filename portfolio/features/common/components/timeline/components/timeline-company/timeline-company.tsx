import { FC, PropsWithChildren } from "react";
import { TbBuildingCommunity } from "react-icons/tb";
import Typography from "../../../typography/typography";

const TimelineCompany: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-row gap-2 items-center justify-center lg:justify-start">
      <TbBuildingCommunity className="text-slate-850" />
      <Typography
        color="black"
        component="h5"
        variant="paragraph"
        weight="regular"
        whitespace="pre"
      >
        {children}
      </Typography>
    </div>
  );
};

export default TimelineCompany;
