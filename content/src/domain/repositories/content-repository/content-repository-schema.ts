import {
  VideoRepositoryMediaSchema,
} from '../video-repository/video-repository-schema';

export type DetailedContentRepositoryMedia =
| VideoRepositoryMediaSchema;

export type ContentRepositorySchema = {
  title: string;
  subtitle: string;
  username: string;
  description: string;
  media: DetailedContentRepositoryMedia;
};
