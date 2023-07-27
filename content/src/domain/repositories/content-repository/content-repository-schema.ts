import {
  MediaRepositorySchema,
} from '../media-repository/media-repository-schema';

export type ContentRepositorySchema = {
  title: string;
  subtitle: string;
  username: string;
  description: string;
  media: MediaRepositorySchema;
};
