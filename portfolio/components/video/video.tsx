import { FC, useRef } from "react";

export type VideoProps = {
  src: string;
  title: string;
};

const Video: FC<VideoProps> = ({ src, title }) => {
  const ref = useRef<HTMLIFrameElement>(null);

  const handleOnClick = () => {
    console.log(
      "🚀 ~ file: video.tsx:14 ~ handleOnClick ~ current:",
      ref.current
    );
    if (ref.current) {
      ref.current.classList.remove("saturate-0");
    }
  };

  return (
    <div className="saturate-0" onClick={handleOnClick}>
      <iframe
        ref={ref}
        src={src}
        title={title}
        allowFullScreen
        className="rounded-lg h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
      />
    </div>
  );
};

export default Video;
