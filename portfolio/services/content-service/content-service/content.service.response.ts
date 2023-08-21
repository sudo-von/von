import { VideoResponse } from "../video-service/video.service.response";
import { VectorsResponse } from "../vector-service/vector.service.response";
import { TimelinesResponse } from "../timeline-service/timeline.service.response";
import { StrapiData, StrapiAPIResponse } from "../strapi-service/strapi.service.response";

type ContentData = {
  video: VideoResponse;
  vectors: VectorsResponse;
  timelines: TimelinesResponse;
};

type ContentMedia = {
  data: StrapiData<ContentData>;
};

type ContentAttributes = {
  title: string;
  subtitle: string;
  description: string;
  media: ContentMedia;
};

export type ContentResponse = StrapiData<ContentAttributes>;

export type ContentAPIResponse = StrapiAPIResponse<ContentResponse[]>;
