import { FC } from "react";
import Video, { VideoProps } from "../../../../../../components/video/video";

export type MediaVideoProps = {
  video: VideoProps;
};

const MediaVideo: FC<MediaVideoProps> = ({ video }) => {
  return (
    <div className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl aspect-video">
      <Video src={video.src} title={video.title} />
    </div>
  );
};

export default MediaVideo;
