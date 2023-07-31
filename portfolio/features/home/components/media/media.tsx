import React, { FC } from "react";
import { Media } from "../../entities/media-entity/media-entity";
import MediaVideo from "./components/media-video/media-video";
import ContentTimelineCollection from "./components/content-timeline-collection/content-timeline-collection";

type MediaProps = {
  media: Media;
};

const Media: FC<MediaProps> = ({ media }) => {
  let Content = null;

  if (media.type === "timeline-media") {
    Content = <ContentTimelineCollection timelines={media.timelines} />;
  }

  if (media.type === "video-media") {
    Content = <MediaVideo src={media.video.src} title={media.video.title} />;
  }

  return (
    <div className="flex justify-center items-center mt-16 md:mt-10">
      {Content}
    </div>
  );
};

export default Media;
