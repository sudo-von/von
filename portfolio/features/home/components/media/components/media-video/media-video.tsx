import { FC } from "react";
import Legend from "../../../../../common/components/legend/legend";
import Video, {
  VideoProps,
} from "../../../../../common/components/video/video";

export type MediaVideoProps = {
  video: VideoProps;
};

const MediaVideo: FC<MediaVideoProps> = ({ video }) => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl aspect-video">
      <Video src={video.src} title={video.title} />
      <div className="p-4 text-center">
        <Legend>{video.title}</Legend>
      </div>
    </div>
  );
};

export default MediaVideo;
