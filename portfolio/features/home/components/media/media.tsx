import { FC } from "react";
import MediaVideo, {
  MediaVideoProps,
} from "./components/media-video/media-video";
import MediaVectorList, {
  MediaVectorListProps,
} from "./components/media-vector-list/media-vector-list";
import MediaTimelineList, {
  MediaTimelineListProps,
} from "./components/media-timeline-list/media-timeline-list";

export type MediaProps = {
  media:
    | MediaTimelineListProps
    | MediaVectorListProps
    | Partial<MediaVideoProps>;
};

const Media: FC<MediaProps> = ({ media }) => {
  let Component;

  if ("timelines" in media && media.timelines.length) {
    Component = <MediaTimelineList timelines={media.timelines} />;
  } else if ("vectors" in media && media.vectors.length) {
    Component = <MediaVectorList vectors={media.vectors} />;
  } else if ("video" in media && media.video) {
    Component = <MediaVideo video={media.video} />;
  } else {
    return null;
  }

  return <div className="flex justify-center items-center">{Component}</div>;
};

export default Media;
