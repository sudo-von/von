import {
  ContentRepositorySchema,
} from '../content-repository/content-repository-schema';

export type VideoMediaRepositorySchema = {
  url: string;
  type: 'video';
};

export type VideoRepositorySchema = ContentRepositorySchema<VideoMediaRepositorySchema>;
