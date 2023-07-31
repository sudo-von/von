import { FC } from "react";
import Timeline, {
  TimelineProps,
} from "../../../../../../components/timeline/timeline";

export type MediaTimelineListProps = {
  timelines: TimelineProps[];
};

const MediaTimelineList: FC<MediaTimelineListProps> = ({ timelines }) => {
  return (
    <div className="flex flex-col justify-center items-center lg:items-end xl:items-center gap-4 md:gap-6 lg:gap-4">
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
    </div>
  );
};

export default MediaTimelineList;
