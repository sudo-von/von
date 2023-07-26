import {
  VideoRepositorySchema,
} from '../video-repository/video-repository-schema';
import {
  VectorRepositorySchemaCollection,
} from '../vector-repository/vector-repository-schema';
import {
  TimelineRepositorySchemaCollection,
} from '../timeline-repository/timeline-repository-schema';

export type DetailedContentMedia =
| VectorRepositorySchemaCollection
| TimelineRepositorySchemaCollection
| VideoRepositorySchema;

export type ContentRepositorySchema = {
  title: string;
  subtitle: string;
  username: string;
  description: string;
  media?: DetailedContentMedia;
};
