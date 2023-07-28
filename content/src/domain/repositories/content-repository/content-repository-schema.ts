import {
  MediaRepositorySchema,
} from '../media-repository/media-repository-schema';
import {
  GenericContentRepositorySchema,
} from '../generic-content-repository/generic-content-repository-schema';

export type ContentRepositorySchema = GenericContentRepositorySchema<MediaRepositorySchema>;
