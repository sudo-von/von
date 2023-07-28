import {
  ContentRepositorySchema,
} from '../content-repository/content-repository-schema';

export type CybersecurityMediaRepositorySchema = {
  url: string;
};

export type CybersecurityRepositorySchema = ContentRepositorySchema<
CybersecurityMediaRepositorySchema
>;
