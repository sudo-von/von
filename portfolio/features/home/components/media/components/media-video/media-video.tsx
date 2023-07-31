import { FC } from "react";
import Video from "../../../../../../components/video/video";

export type MediaVideoProps = {
  src: string;
  title: string;
};

const MediaVideo: FC<MediaVideoProps> = ({ src, title }) => {
  return (
    <div className="w-full lg:w-11/12 xl:w-10/12 h-60 sm:h-72 md:h-80 lg:h-96">
      <Video src={src} title={title} />
    </div>
  );
};

export default MediaVideo;
