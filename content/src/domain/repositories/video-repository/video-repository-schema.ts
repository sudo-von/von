import {
  VideoMediaRepositorySchema,
} from '../media-repository/video-media-repository-schema';
import {
  GenericContentRepositorySchema,
} from '../generic-content-repository/generic-content-repository-schema';

export type VideoRepositorySchema = GenericContentRepositorySchema<VideoMediaRepositorySchema>;
