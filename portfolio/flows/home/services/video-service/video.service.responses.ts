import { StrapiData } from "@home/services/strapi-service/strapi.service.responses";

type VideoAttributes = {
  title: string;
  url: string;
};

export type VideoData = StrapiData<VideoAttributes>;

export type VideoResponse = {
  data?: VideoData;
};
