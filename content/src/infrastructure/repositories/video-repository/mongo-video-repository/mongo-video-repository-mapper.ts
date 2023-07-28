import {
  HydratedDocument,
} from 'mongoose';
import {
  Video,
} from '../../../../domain/entities/video-entity/video-entities';
import {
  VideoRepositorySchema,
} from '../../../../domain/repositories/video-repository/video-repository-schema';

const videoDocumentToVideo = (
  document: HydratedDocument<VideoRepositorySchema>,
): Video => ({
  id: document._id.toHexString(),
  title: document.title,
  subtitle: document.subtitle,
  username: document.username,
  description: document.description,
  media: {
    url: document.media.url,
    type: document.media.type,
  },
});

export default videoDocumentToVideo;
