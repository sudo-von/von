import {
  EmptyMediaRepositorySchema,
} from './empty-media-repository-schema';
import {
  VideoMediaRepositorySchema,
} from './video-media-repository-schema';

export type MediaRepositorySchema =
| EmptyMediaRepositorySchema
| VideoMediaRepositorySchema;
