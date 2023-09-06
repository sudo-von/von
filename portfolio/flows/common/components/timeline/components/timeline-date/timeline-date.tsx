import { FC } from "react";
import Typography from "@common/components/typography/typography";

type TimelineDateProps = {
  endDate: string;
  startDate: string;
};

const TimelineDate: FC<TimelineDateProps> = ({ endDate, startDate }) => {
  return (
    <Typography
      color="dark"
      component="h5"
      size="small"
      spacing="normal"
      weight="light"
      whitespace="pre"
    >
      {startDate} - {endDate}
    </Typography>
  );
};

export default TimelineDate;
