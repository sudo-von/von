import { ContentProps } from "@home/components/content/content";
import { toVideoProps } from "@common/components/video/video.mappers";
import { toVectorProps } from "@common/components/vector/vector.mappers";
import { toTimelineProps } from "@common/components/timeline/timeline.mappers";
import { ContentResponse } from "@home/services/content-service/content.service.responses";

export const toContentProps = (contentResponse: ContentResponse): ContentProps => {
  const { title, subtitle, description, media } = contentResponse.attributes;
  const { video, vectors, timelines } = media.data.attributes;

  const result: ContentProps = {
    title,
    subtitle,
    description,
    media: {
      video: video.data && toVideoProps(video.data),
      vectors: vectors.data.map((v) => toVectorProps(v)),
      timelines: timelines.data.map((t) => toTimelineProps(t)),
    },
  };

  return result;
};
