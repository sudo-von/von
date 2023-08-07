import { FC } from "react";
import useSaturation from "../../hooks/useSaturation/useSaturation";

export type VideoProps = {
  src: string;
  title: string;
  onMouseEnter?: VoidFunction;
};

const Video: FC<VideoProps> = ({ src, title }) => {
  const { ref, handleOnMouseEnter } = useSaturation<HTMLIFrameElement>();
  return (
    <iframe
      ref={ref}
      src={src}
      title={title}
      allowFullScreen
      onMouseEnter={handleOnMouseEnter}
      className="rounded-lg h-full w-full saturate-0 duration-1000 transition"
    />
  );
};

export default Video;
