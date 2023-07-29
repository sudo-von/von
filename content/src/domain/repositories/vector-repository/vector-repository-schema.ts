import {
  GenericContentRepositorySchema,
} from '../content-repository/content-repository-generics';

export type VectorMediaRepositorySchema = {
  type: 'vector-collection',
  vectors: VectorSchema[];
};

export type VectorSchema = {
  id: string;
  filename: string;
  description: string;
};

export type VectorRepositorySchema = GenericContentRepositorySchema<VectorMediaRepositorySchema>;
