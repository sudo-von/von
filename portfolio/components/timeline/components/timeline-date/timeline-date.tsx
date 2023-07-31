import { FC } from "react";
import Typography from "../../../typography/typography";

type TimelineDateProps = {
  endDate: Date;
  startDate: Date;
};

const formatTimelineDate = (date: Date) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = date.getMonth();
  const year = date.getFullYear();

  const formattedDate = `${months[month]} ${year}`;
  return formattedDate;
};

const TimelineDate: FC<TimelineDateProps> = ({ endDate, startDate }) => {
  const formattedEndDate = formatTimelineDate(endDate);
  const formattedStartDate = formatTimelineDate(startDate);
  const formattedDates = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <Typography variant="legend" color="slate" weight="light">
      {formattedDates}
    </Typography>
  );
};

export default TimelineDate;
