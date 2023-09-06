import { FC } from "react";
import Timeline, { TimelineProps } from "@common/components/timeline/timeline";

export type MediaTimelineListProps = {
  timelines: TimelineProps[];
};

const MediaTimelineList: FC<MediaTimelineListProps> = ({ timelines }) => {
  const baseSrc = "http://sudo-von.com:1337";
  return (
    <ol className="flex flex-col w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mt-4 lg:mt-0 2xl:gap-8 lg:relative lg:border-l lg:border-slate-100">
      {timelines.map(
        ({ company, description, endDate, position, src, startDate }) => (
          <li key={src}>
            <Timeline
              company={company}
              description={description}
              endDate={endDate}
              position={position}
              src={`${baseSrc}${src}`}
              startDate={startDate}
            />
          </li>
        )
      )}
    </ol>
  );
};

export default MediaTimelineList;
