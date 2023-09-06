import { FC } from "react";
import Typography from "@common/components/typography/typography";
import { formatTimelineDate } from "@common/components/timeline/components/timeline-date/timeline-date.utils";

type TimelineDateProps = {
  endDate: Date;
  startDate: Date;
};

const TimelineDate: FC<TimelineDateProps> = ({ endDate, startDate }) => {
  const formatedEndDate = formatTimelineDate(endDate);
  const formatedStartDate = formatTimelineDate(startDate);
  return (
    <Typography
      color="dark"
      component="h5"
      size="small"
      spacing="normal"
      weight="light"
      whitespace="pre"
    >
      {formatedStartDate} - {formatedEndDate}
    </Typography>
  );
};

export default TimelineDate;
