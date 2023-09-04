import createAPIService from "@services/api-service/api.service";
import { ContentAPIResponse } from "@home/services/content-service/content.service.responses";

const contentService = createAPIService({
  base: "contents",
  port: 1337,
});

export const getContentList = async (): Promise<ContentAPIResponse> => {
  const query = '?populate[0]=media&populate[1]=media.timelines.src,media.vectors.src,media.video';
  const { data } = await contentService.get<ContentAPIResponse>(query);
  return data;
};
