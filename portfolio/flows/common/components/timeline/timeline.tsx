import { FC } from "react";
import TimelineDate from "./components/timeline-date/timeline-date";
import TimelineImage from "./components/timeline-image/timeline-image";
import TimelineCompany from "./components/timeline-company/timeline-company";
import TimelinePosition from "./components/timeline-position/timeline-position";
import TimelineDescription from "./components/timeline-description/timeline-description";

export type TimelineProps = {
  src: string;
  company: string;
  position: string;
  endDate: string;
  startDate: string;
  description: string;
};

const Timeline: FC<TimelineProps> = ({
  src,
  company,
  position,
  endDate,
  startDate,
  description,
}) => {
  const castedEndDate = new Date(endDate);
  const castedStartDate = new Date(startDate);
  return (
    <div className="flex flex-col border-slate-100 py-10 lg:py-0 border-b last:border-b-0 lg:border-b-0 lg:pl-12">
      <div className="flex flex-row gap-4 lg:gap-0 justify-start items-center lg:items-start">
        <div className="relative lg:absolute w-16 h-16 lg:w-16 lg:h-16 lg:-left-8">
          <TimelineImage alt={company} src={src} />
        </div>
        <div className="flex flex-col justify-center items-start gap-0.5">
          <TimelineCompany>{company}</TimelineCompany>
          <TimelineDate startDate={castedStartDate} endDate={castedEndDate} />
          <TimelinePosition>{position}</TimelinePosition>
        </div>
      </div>
      <div className="mt-4">
        <TimelineDescription>{description}</TimelineDescription>
      </div>
    </div>
  );
};

export default Timeline;
