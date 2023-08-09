import { StrapiData } from "../strapi-service/strapi.service.types";

type VideoResponse = {
  url: string;
  title: string;
};

export type VideoContentResponse = {
  data?: StrapiData<VideoResponse>;
};