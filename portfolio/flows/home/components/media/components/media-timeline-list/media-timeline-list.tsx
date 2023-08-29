import { FC } from "react";
import Timeline, {
  TimelineProps,
} from "../../../../../common/components/timeline/timeline";

export type MediaTimelineListProps = {
  timelines: TimelineProps[];
};

const MediaTimelineList: FC<MediaTimelineListProps> = ({ timelines }) => {
  return (
    <ol className="flex flex-col w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mt-4 lg:mt-0 lg:gap-8 lg:relative lg:border-l lg:border-slate-100">
      {timelines.map(
        ({
          src,
          company,
          endDate,
          position: subtitle,
          startDate,
          description,
        }) => (
          <Timeline
            src={`http://localhost:1337${src}`}
            key={company}
            company={company}
            endDate={endDate}
            position={subtitle}
            startDate={startDate}
            description={description}
          />
        )
      )}
    </ol>
  );
};

export default MediaTimelineList;
