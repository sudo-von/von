import strapi from "../strapi-service/strapi.service";
import { StrapiContentResponse } from "./content.service.types";

const CONTENT_BASE_URL = 'contents';

export const getStrapiContents = async () => {
  const filters = '?populate[0]=media&populate[1]=media.timelines.src,media.vectors.src,media.video';
  const { data } = await strapi.get<StrapiContentResponse>(`${CONTENT_BASE_URL}${filters}`);
  return data;
}
