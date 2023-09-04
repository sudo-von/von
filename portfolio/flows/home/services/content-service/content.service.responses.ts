import { VideoResponse } from "@home/services/video-service/video.service.responses";
import { VectorsResponse } from "@home/services/vector-service/vector.service.responses";
import { TimelinesResponse } from "@home/services/timeline-service/timeline.service.responses";
import { StrapiAPIResponse, StrapiData } from "@home/services/strapi-service/strapi.service.responses";

type ContentData = {
  timelines: TimelinesResponse;
  vectors: VectorsResponse;
  video: VideoResponse;
};

type ContentMedia = {
  data: StrapiData<ContentData>;
};

type ContentAttributes = {
  description: string;
  media: ContentMedia;
  subtitle: string;
  title: string;
};

export type ContentResponse = StrapiData<ContentAttributes>;

export type ContentAPIResponse = StrapiAPIResponse<ContentResponse[]>;
