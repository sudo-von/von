import { FC } from "react";
import Timeline, {
  TimelineProps,
} from "../../../../../common/components/timeline/timeline";

export type MediaTimelineListProps = {
  timelines: TimelineProps[];
};

const MediaTimelineList: FC<MediaTimelineListProps> = ({ timelines }) => {
  return (
    <ol className="flex flex-col justify-center items-center w-full max-w-xs sm:max-w-md md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl gap-4 2xl:gap-8 mt-4 lg:mt-0 relative border-l border-slate-100">
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
