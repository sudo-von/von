import { FC } from "react";
import TimelineImage from "./components/timeline-image/timeline-image";
import TimelineTitle from "./components/timeline-title/timeline-title";
import TimelineChronology from "./components/timeline-date/timeline-chronology";
import TimelineDescription from "./components/timeline-description/timeline-description";
import Typography from "../typography/typography";

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
    <li className="flex flex-col w-full gap-1 pl-8 sm:pl-10 md:pl-12 lg:pl-14">
      <span className="absolute flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 -left-6 sm:-left-8 md:-left-8">
        <TimelineImage alt={title} src={src} />
      </span>
      <TimelineTitle>{title}</TimelineTitle>
      <TimelineChronology startDate={castedStartDate} endDate={castedEndDate} />
      <TimelineDescription>{description}</TimelineDescription>
    </li>
  );
};

export default Timeline;
