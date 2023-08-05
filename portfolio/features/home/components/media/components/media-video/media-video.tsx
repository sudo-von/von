import { FC } from "react";
import Video, {
  VideoProps,
} from "../../../../../common/components/video/video";
import Legend from "../../../../../common/components/legend/legend";
import useSaturation from "../../../../../common/hooks/useSaturation/useSaturation";

export type MediaVideoProps = {
  video: VideoProps;
};

const MediaVideo: FC<MediaVideoProps> = ({ video }) => {
  const { ref, handleOnMouseEnter } = useSaturation<HTMLIFrameElement>();
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl aspect-video mt-4 lg:mt-0">
      <Video
        ref={ref}
        src={video.src}
        title={video.title}
        onMouseEnter={handleOnMouseEnter}
      />
      <div className="p-4 text-center">
        <Legend>{video.title}</Legend>
      </div>
    </div>
  );
};

export default MediaVideo;
