import { FC } from "react";
import { TbCalendar } from "react-icons/tb";
import Typography from "../../../typography/typography";
import { formatTimelineDate } from "./timeline-date.utils";

type TimelineDateProps = {
  endDate: Date;
  startDate: Date;
};

const TimelineDate: FC<TimelineDateProps> = ({ endDate, startDate }) => {
  const formattedEndDate = formatTimelineDate(endDate);
  const formattedStartDate = formatTimelineDate(startDate);
  return (
    <div className="flex flex-row gap-2 items-center justify-center lg:justify-start">
      <TbCalendar className="text-slate-850" />
      <Typography
        color="black"
        component="h6"
        variant="paragraph"
        weight="light"
        whitespace="pre"
      >
        {formattedStartDate} - {formattedEndDate}
      </Typography>
    </div>
  );
};

export default TimelineDate;
