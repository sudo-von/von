export type VectorRepositorySchemaCollection = {
  type: 'vector-collection';
  vectors: VectorRepositorySchema[];
};

export type VectorRepositorySchema = {
  alt: string;
  filename: string;
};
