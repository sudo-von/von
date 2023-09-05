import { StrapiData } from "@home/services/strapi-service/strapi.service.responses";

type VectorSrcAttributes = {
  name: string;
  url: string;
};

type VectorSrcData = StrapiData<VectorSrcAttributes>;

type VectorSrc = {
  data: VectorSrcData;
};

type VectorAttributes = {
  alt: string;
  src: VectorSrc;
};

export type VectorData = StrapiData<VectorAttributes>;

export type VectorsResponse = {
  data: VectorData[];
};
