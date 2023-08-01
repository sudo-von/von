import { FC } from "react";
import Video, { VideoProps } from "../../../../../../components/video/video";

export type MediaVideoProps = {
  video: VideoProps;
};

const MediaVideo: FC<MediaVideoProps> = ({ video }) => {
  return (
    <div className="w-full max-w-xs sm:max-w-md lg:max-w-md xl:max-w-lg aspect-video">
      <Video src={video.src} title={video.title} />
    </div>
  );
};

export default MediaVideo;
