import { VideoProps } from "@common/components/video/video";
import { VideoData } from "@home/services/video-service/video.service.responses";

export const toVideoProps = (videoData: VideoData): VideoProps => ({
  src: videoData.attributes.url,
  title: videoData.attributes.title,
});
