import { FC } from "react";
import Typography from "../../../typography/typography";
import { formatTimelineChronology } from "./timeline-chronology.utils";

type TimelineChronologyProps = {
  endDate: Date;
  startDate: Date;
};

const TimelineChronology: FC<TimelineChronologyProps> = ({
  endDate,
  startDate,
}) => {
  const formattedEndDate = formatTimelineChronology(endDate);
  const formattedStartDate = formatTimelineChronology(startDate);
  const chronology = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <Typography
      color="black"
      component="h6"
      spacing="wide"
      variant="legend"
      weight="light"
      whitespace="pre"
    >
      {chronology}
    </Typography>
  );
};

export default TimelineChronology;
