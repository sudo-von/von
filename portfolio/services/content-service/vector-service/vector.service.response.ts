import { StrapiData } from "../strapi-service/strapi.service.response";

type VectorSrcAttributes = {
  url: string;
  name: string;
};

type VectorSrcData = StrapiData<VectorSrcAttributes>;

type VectorSrc = {
  data: VectorSrcData;
};

type VectorAttributes = {
  alt: string;
  src: VectorSrc;
};

type VectorData = StrapiData<VectorAttributes>;

export type VectorsResponse = {
  data: VectorData[];
};
