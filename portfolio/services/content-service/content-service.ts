
type ContentDataResponse = {
  id: number;
  attributes: {
    vectors: VectorsResponse;
  };
}

type ContentAttributesResponse = {
  title: string;
  subtitle: string;
  description: string;
  media: ContentDataResponse;
}

type ContentResponse = {
  id: number;
  attributes: ContentAttributesResponse;
}