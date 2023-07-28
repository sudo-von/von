export type VectorCollectionResponse = {
  id: string;
  title: string;
  subtitle: string;
  username: string;
  description: string;
  media: {
    type: 'vector-collection';
    vectors: {
      id: string;
      filename: string;
      description: string;
    }[];
  }
};
