import { StrapiData } from "@home/services/strapi-service/strapi.service.responses";

type TimelineSrcAttributes = {
  name: string;
  url: string;
};

type TimelineSrcData = StrapiData<TimelineSrcAttributes>;

type TimelineSrc = {
  data: TimelineSrcData;
};

type TimelineAttributes = {
  company: string;
  description: string;
  end_date: string;
  position: string;
  src: TimelineSrc;
  start_date: string;
};

type TimelineData = StrapiData<TimelineAttributes>;

export type TimelinesResponse = {
  data: TimelineData[];
};
