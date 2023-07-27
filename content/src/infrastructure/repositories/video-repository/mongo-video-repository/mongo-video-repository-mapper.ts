import {
  HydratedDocument,
} from 'mongoose';
import {
  ContentRepositorySchema,
} from '../../../../domain/repositories/content-repository/content-repository-schema';
import { Video } from '../../../../domain/entities/video-entity/video-entitites';

const detailedContentDocumentToVideo = (
  document: HydratedDocument<ContentRepositorySchema>,
): Video => ({
  id: document._id.toHexString(),
  alt: document.media.video.alt,
  url: document.media.video.url,
});

export default detailedContentDocumentToVideo;
