import { FC } from "react";
import MediaVideo, { MediaVideoProps } from "@home/components/media/components/media-video/media-video";
import MediaVectorList, { MediaVectorListProps } from "@home/components/media/components/media-vector-list/media-vector-list";
import MediaTimelineList, { MediaTimelineListProps } from "@home/components/media/components/media-timeline-list/media-timeline-list";

export type MediaProps = {
  media: MediaVideoProps | MediaVectorListProps | MediaTimelineListProps;
};

const Media: FC<MediaProps> = ({ media }) => {
  let Component;

  if ("video" in media && media.video) {
    Component = <MediaVideo video={media.video} />;
  } else if ("vectors" in media && media.vectors.length) {
    Component = <MediaVectorList vectors={media.vectors} />;
  } else if ("timelines" in media && media.timelines.length) {
    Component = <MediaTimelineList timelines={media.timelines} />;
  } else {
    return null;
  }

  return <div className="flex flex-col justify-center items-center">{Component}</div>;
};

export default Media;
