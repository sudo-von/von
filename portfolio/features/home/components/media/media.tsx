import { FC } from "react";
import MediaVideo, {
  MediaVideoProps,
} from "./components/media-video/media-video";
import MediaTimelineList, {
  MediaTimelineListProps,
} from "./components/media-timeline-list/media-timeline-list";

export type MediaProps = {
  media: MediaVideoProps | MediaTimelineListProps;
};

const Media: FC<MediaProps> = ({ media }) => {
  let Component = null;

  if ("timelines" in media) {
    Component = <MediaTimelineList timelines={media.timelines} />;
  }

  if ("video" in media) {
    Component = <MediaVideo video={media.video} />;
  }

  return (
    <div className="flex justify-center lg:justify-end xl:justify-center items-center mt-4 lg:mt-0">
      {Component}
    </div>
  );
};

export default Media;
