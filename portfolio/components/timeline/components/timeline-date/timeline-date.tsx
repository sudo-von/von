import { FC } from "react";
import Typography from "../../../typography/typography";
import { formatTimelineDate } from "./timeline-date.utils";

type TimelineDateProps = {
  endDate: Date;
  startDate: Date;
};

const TimelineDate: FC<TimelineDateProps> = ({ endDate, startDate }) => {
  const formattedEndDate = formatTimelineDate(endDate);
  const formattedStartDate = formatTimelineDate(startDate);
  const formattedDates = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <Typography color="slate" component="h5" variant="caption" weight="light">
      {formattedDates}
    </Typography>
  );
};

export default TimelineDate;
