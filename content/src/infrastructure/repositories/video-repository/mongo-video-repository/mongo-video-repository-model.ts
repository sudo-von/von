import videoRepositorySchema from './mongo-video-repository-schema';
import ContentModel from '../../content-repository/mongo-content-repository/mongo-content-repository-model';

const VideoModel = ContentModel.discriminator('video', videoRepositorySchema);

export default VideoModel;
