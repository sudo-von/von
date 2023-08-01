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
      <div className="relative h-16 md:h-20 lg:h-20 w-32 md:w-36 lg:w-20">
        <TimelineImage alt={title} src={src} />
      </div>
      <div className="flex flex-col gap-1 w-44 md:w-52 lg:w-60">
        <TimelineTitle>{title}</TimelineTitle>
        <TimelineDate startDate={castedStartDate} endDate={castedEndDate} />
        <TimelineDescription>{description}</TimelineDescription>
      </div>
    </div>
  );
};

export default Timeline;
