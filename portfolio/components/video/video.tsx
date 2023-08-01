import { FC } from "react";
import VideoTitle from "./components/video-title/video-title";

export type VideoProps = {
  src: string;
  title: string;
};

const Video: FC<VideoProps> = ({ src, title }) => {
  return (
    <>
      <iframe
        src={src}
        title={title}
        allowFullScreen
        className="rounded-lg h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
      />
      <div className="p-2">
        <VideoTitle>{title}</VideoTitle>
      </div>
    </>
  );
};

export default Video;
