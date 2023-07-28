import {
  ContentRepositorySchema,
} from '../content-repository/content-repository-schema';

export type VectorMediaRepositorySchema = {
  type: 'vector-collection',
  vectors: VectorSchema[];
};

export type VectorSchema = {
  id: string;
  filename: string;
  description: string;
};

export type VectorRepositorySchema = ContentRepositorySchema<VectorMediaRepositorySchema>;
