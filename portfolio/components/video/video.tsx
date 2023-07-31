import { FC } from "react";

type VideoProps = {
  src: string;
  title: string;
};

const Video: FC<VideoProps> = ({ src, title }) => {
  return (
    <iframe
      src={src}
      title={title}
      allowFullScreen
      className="outline-none rounded-lg h-full w-full"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    />
  );
};

export default Video;
