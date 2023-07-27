import {
  VideoRepositorySchema,
} from '../video-repository/video-repository-schema';

export type MediaRepositorySchema = VideoMediaRepositorySchema;

export type VideoMediaRepositorySchema = {
  id: string;
  type: 'video',
  video: VideoRepositorySchema
};
