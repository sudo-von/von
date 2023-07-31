import { FC } from "react";

export type VideoProps = {
  src: string;
  title: string;
};

const Video: FC<VideoProps> = ({ src, title }) => {
  return (
    <iframe
      src={src}
      title={title}
      allowFullScreen
      className="rounded-lg h-full w-full"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
    />
  );
};

export default Video;
