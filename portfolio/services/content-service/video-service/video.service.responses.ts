import { StrapiData } from "../strapi-service/strapi.service.responses";

type VideoAttributes = {
  url: string;
  title: string;
};

type VideoData = StrapiData<VideoAttributes>;

export type VideoResponse = {
  data?: VideoData;
};
