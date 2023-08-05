import { FC } from "react";
import Timeline, {
  TimelineProps,
} from "../../../../../common/components/timeline/timeline";

export type MediaTimelineListProps = {
  timelines: TimelineProps[];
};

const MediaTimelineList: FC<MediaTimelineListProps> = ({ timelines }) => {
  return (
    <ol className="flex flex-col w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-max lg:bg-primary xl:max-w-1xl 2xl:max-w-1xl gap-8 mt-4 lg:mt-0 lg:relative lg:border-l lg:border-slate-100">
      {timelines.map(({ src, title, endDate, startDate, description }) => (
        <Timeline
          src={src}
          key={title}
          title={title}
          endDate={endDate}
          startDate={startDate}
          description={description}
        />
      ))}
    </ol>
  );
};

export default MediaTimelineList;
