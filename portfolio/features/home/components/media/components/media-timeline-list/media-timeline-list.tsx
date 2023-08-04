import { FC } from "react";
import Timeline, {
  TimelineProps,
} from "../../../../../../components/timeline/timeline";

export type MediaTimelineListProps = {
  timelines: TimelineProps[];
};

const MediaTimelineList: FC<MediaTimelineListProps> = ({ timelines }) => {
  return (
    <ol className="flex flex-col justify-center items-center w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl gap-4 2xl:gap-8 relative border-l border-slate-100">
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
