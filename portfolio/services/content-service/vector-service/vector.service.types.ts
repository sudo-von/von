import { StrapiData } from "../strapi-service/strapi.service.types";

type VectorAttributesResponse = {
  url: string;
  name: string;
};

type VectorSrcResponse = {
  data: StrapiData<VectorAttributesResponse>;
};

type VectorResponse = {
  alt: string;
  src: VectorSrcResponse;
};

export type VectorsContentResponse = {
  data: StrapiData<VectorResponse>[];
};
