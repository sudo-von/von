import { ContentResponse } from "./content.service.types";
import { ContentProps } from "../../features/home/components/content/content";

export const contentResponseToProps = (contentResponse: ContentResponse): ContentProps => {

  const { title, subtitle, description, media } = contentResponse.attributes;
  console.log("🚀 ~ file: content.service.mappers.ts:7 ~ contentResponseToProps ~ attributes:", media.data)
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
    }
  };

  return result;
};