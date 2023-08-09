import { VideoContentResponse } from "../video-service/video.service.types";
import { VectorsContentResponse } from "../vector-service/vector.service.types";
import { StrapiData, StrapiResponse } from "../strapi-service/strapi.service.types";
import { TimelinesContentResponse } from "../timeline-service/timeline.service.types";

type ContentMediaAttributesResponse = {
  video: VideoContentResponse;
  vectors: VectorsContentResponse;
  timelines: TimelinesContentResponse;
};

type ContentMediaResponse = {
  data: StrapiData<ContentMediaAttributesResponse>;
}

type ContentAttributesResponse = {
  title: string;
  subtitle: string;
  description: string;
  media: ContentMediaResponse;
}

export type ContentResponse = StrapiData<ContentAttributesResponse>;

export type StrapiContentResponse = StrapiResponse<ContentResponse[]>;
