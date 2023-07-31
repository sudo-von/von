import { FC } from "react";
import TimelineDate from "./components/timeline-date/timeline-date";
import TimelineImage from "./components/timeline-image/timeline-image";
import TimelineTitle from "./components/timeline-title/timeline-title";
import TimelineDescription from "./components/timeline-description/timeline-description";

export type TimelineProps = {
  src: string;
  title: string;
  endDate: string;
  startDate: string;
  description: string;
};

const Timeline: FC<TimelineProps> = ({
  src,
  title,
  endDate,
  startDate,
  description,
}) => {
  const castedEndDate = new Date(endDate);
  const castedStartDate = new Date(startDate);
  return (
    <div className="flex flex-row justify-center items-center gap-4">
      <TimelineImage alt={title} src={src} />
      <div className="flex flex-col gap-1 w-44">
        <TimelineTitle>{title}</TimelineTitle>
        <TimelineDate startDate={castedStartDate} endDate={castedEndDate} />
        <TimelineDescription>{description}</TimelineDescription>
      </div>
    </div>
  );
};

export default Timeline;
