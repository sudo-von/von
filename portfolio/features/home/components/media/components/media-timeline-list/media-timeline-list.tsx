import { FC } from "react";
import Timeline, {
  TimelineProps,
} from "../../../../../../components/timeline/timeline";

export type MediaTimelineListProps = {
  timelines: TimelineProps[];
};

const MediaTimelineList: FC<MediaTimelineListProps> = ({ timelines }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
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
