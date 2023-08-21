import createAPIService from "../../api-service/api.service";
import { ContentAPIResponse } from "./content.service.response";

const contentService = createAPIService({ port: 1337, base: "contents" });

export const getStrapiContents = async () => {
  const query = '?populate[0]=media&populate[1]=media.timelines.src,media.vectors.src,media.video';
  const { data } = await contentService.get<ContentAPIResponse>(query);
  return data;
}
