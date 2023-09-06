import { FC } from "react";
import Video, { VideoProps } from "@common/components/video/video";
import useSaturation from "@common/hooks/use-saturation/use-saturation";

export type MediaVideoProps = {
  video: VideoProps;
};

const MediaVideo: FC<MediaVideoProps> = ({ video }) => {
  const { src, title } = video;
  const { ref, handleOnMouseEnter } = useSaturation<HTMLIFrameElement>();
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl aspect-video mt-4 lg:mt-0">
      <Video isSaturated onMouseEnter={handleOnMouseEnter} ref={ref} src={src} title={title} />
    </div>
  );
};

export default MediaVideo;
