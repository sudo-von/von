import { StrapiData } from "../strapi-service/strapi.service.response";

type TimelineSrcAttributes = {
  url: string;
  name: string;
};

type TimelineSrcData = StrapiData<TimelineSrcAttributes>;

type TimelineSrc = {
  data: TimelineSrcData;
};

type TimelineAttributes = {
  company: string;
  position: string;
  end_date: string;
  start_date: string;
  description: string;
  src: TimelineSrc;
};

type TimelineData = StrapiData<TimelineAttributes>;

export type TimelinesResponse = {
  data: TimelineData[];
};
