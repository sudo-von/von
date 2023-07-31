import { FC } from "react";
import ContentTimeline, {
  ContentTimelineProps,
} from "../media-timeline/media-timeline";

type ContentTimelineCollectionProps = {
  timelines: ContentTimelineProps[];
};

const ContentTimelineCollection: FC<ContentTimelineCollectionProps> = ({
  timelines,
}) => {
  return (
    <div className="flex flex-col justify-center items-center lg:items-end xl:items-center gap-5 w-full">
      {timelines.map(({ src, title, endDate, startDate, description }) => (
        <ContentTimeline
          key={title}
          src={src}
          title={title}
          endDate={endDate}
          startDate={startDate}
          description={description}
        />
      ))}
    </div>
  );
};

export default ContentTimelineCollection;
