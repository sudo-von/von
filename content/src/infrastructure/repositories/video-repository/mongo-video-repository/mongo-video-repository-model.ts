import {
  model,
} from 'mongoose';
import videoRepositorySchema from './mongo-video-repository-schema';
import {
  VideoRepositorySchema,
} from '../../../../domain/repositories/video-repository/video-repository-schema';

const VideoModel = model<VideoRepositorySchema>('video', videoRepositorySchema);

export default VideoModel;
