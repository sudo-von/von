import { FC } from "react";
import Title from "./components/title/title";
import useSaturation from "../../hooks/use-saturation/use-saturation";

export type VideoProps = {
  onMouseEnter?: VoidFunction;
  src: string;
  title: string;
};

const Video: FC<VideoProps> = ({ src, title }) => {
  const { ref, handleOnMouseEnter } = useSaturation<HTMLIFrameElement>();
  return (
    <>
      <iframe
        ref={ref}
        src={src}
        title={title}
        allowFullScreen
        onMouseEnter={handleOnMouseEnter}
        className="rounded-lg h-full w-full saturate-0 duration-1000 transition"
      />
      <div className="p-4 text-center">
        <Title>{title}</Title>
      </div>
    </>
  );
};

export default Video;
