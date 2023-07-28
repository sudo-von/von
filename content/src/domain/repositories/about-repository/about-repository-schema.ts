import {
  ContentRepositorySchema,
} from '../content-repository/content-repository-schema';

export type AboutMediaRepositorySchema = {
  url: string;
};

export type AboutRepositorySchema = ContentRepositorySchema<AboutMediaRepositorySchema>;
