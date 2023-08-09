type VectorSrcDataAttributesResponse = {
  name: string;
  url: string;
}

type VectorSrcDataResponse = {
  id: number;
  attributes: VectorSrcDataAttributesResponse;
}

type VectorSrcResponse = {
  data: VectorSrcDataResponse;
}

type VectorAttributesResponse = {
  alt: string;
  src: VectorSrcResponse;
}

type VectorResponse = {
  id: number;
  attributes: VectorAttributesResponse;
}

type VectorsResponse = {
  data: VectorResponse[]; 
};