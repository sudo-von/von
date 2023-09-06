import { forwardRef } from "react";
import VideoTitle from "@common/components/video/components/video-title/video-title";

export type VideoProps = {
  isSaturated?: boolean;
  onMouseEnter?: VoidFunction;
  src: string;
  title: string;
};

const Video = forwardRef<HTMLIFrameElement, VideoProps>(
  ({ isSaturated, onMouseEnter, src, title }, ref) => {
    const saturationClassName = isSaturated ? "duration-1000 transition saturate-0" : "";
    const className = `${saturationClassName} rounded-lg h-full w-full`;
    return (
      <>
        <iframe
          allowFullScreen
          className={className}
          onMouseEnter={onMouseEnter}
          ref={ref}
          src={src}
          title={title}
        />
        <div className="p-4 text-center">
          <VideoTitle>{title}</VideoTitle>
        </div>
      </>
    );
  }
);

Video.displayName = "Video";

export default Video;
