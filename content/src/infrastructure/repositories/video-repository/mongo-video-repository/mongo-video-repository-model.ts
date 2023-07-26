import videoRepositorySchema from './mongo-video-repository-schema';
import contentRepositorySchema from '../../content-repository/mongo-content-repository/mongo-content-repository-schema';

const VideoModel = contentRepositorySchema.discriminator('video', videoRepositorySchema);

export default VideoModel;
