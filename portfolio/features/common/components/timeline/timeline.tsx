import { FC, useState } from "react";
import TimelineImage from "./components/timeline-image/timeline-image";
import TimelineTitle from "./components/timeline-title/timeline-title";
import TimelineChronology from "./components/timeline-date/timeline-chronology";
import TimelineDescription from "./components/timeline-description/timeline-description";
import { AiOutlineMinus } from "react-icons/ai";
import Legend from "../legend/legend";
import Description from "../description/description";

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
    <li className="flex flex-col w-full gap-4 lg:gap-1 lg:pl-12">
      <div className="flex flex-row gap-2 md:gap-3">
        <div className="relative lg:absolute lg:flex lg:items-center lg:justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:-left-8">
          <TimelineImage alt={title} src={src} />
        </div>
        <div className="flex flex-col justify-center lg:gap-1">
          <TimelineTitle>{title}</TimelineTitle>
          <TimelineChronology
            startDate={castedStartDate}
            endDate={castedEndDate}
          />
        </div>
      </div>
      <Description>{description}</Description>
    </li>
  );
};

export default Timeline;
