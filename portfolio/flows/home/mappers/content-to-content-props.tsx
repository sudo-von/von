import { ContentProps } from "../components/content/content";
import { ContentResponse } from "../../../services/api-service/content-service/content-service/content.service.responses";

export const contentToContentProps = (
  contentResponse: ContentResponse
): ContentProps => {
  const { title, subtitle, description, media } = contentResponse.attributes;
  const { video, vectors, timelines } = media.data.attributes;

  const videoMedia = video.data && {
    src: video.data.attributes.url,
    title: video.data.attributes.title,
  };

  const vectorsMedia = vectors.data.map((v) => ({
    alt: v.attributes.alt,
    src: v.attributes.src.data.attributes.url,
  }));

  const timelinesMedia = timelines.data.map((t) => ({
    company: t.attributes.company,
    endDate: t.attributes.end_date,
    position: t.attributes.position,
    startDate: t.attributes.start_date,
    description: t.attributes.description,
    src: t.attributes.src.data.attributes.url,
  }));

  const result: ContentProps = {
    title,
    subtitle,
    description,
    media: {
      video: videoMedia,
      vectors: vectorsMedia,
      timelines: timelinesMedia,
    },
  };

  return result;
};
