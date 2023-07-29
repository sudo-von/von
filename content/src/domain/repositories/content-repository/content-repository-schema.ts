import {
  GenericContentRepositorySchema,
} from './content-repository-generics';
import {
  MediaRepositorySchema,
} from '../media-repository/media-repository-schema';

export type ContentRepositorySchema = GenericContentRepositorySchema<MediaRepositorySchema>;
