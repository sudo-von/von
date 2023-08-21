import { StrapiData } from "../strapi-service/strapi.service.types";

type TimelineAttributesResponse = {
  url: string;
  name: string;
};

type TimelineSrcResponse = {
  data: StrapiData<TimelineAttributesResponse>;
};

type TimelinesResponse = {
  company: string;
  position: string;
  end_date: string;
  start_date: string;
  description: string;
  src: TimelineSrcResponse;
};

export type TimelinesContentResponse = {
  data: StrapiData<TimelinesResponse>[];
};
