import {
  HydratedDocument,
} from 'mongoose';
import {
  DetailedContent,
} from '../../../../domain/entities/content-entity/content-entities';
import {
  ContentRepositorySchema,
} from '../../../../domain/repositories/content-repository/content-repository-schema';

const contentDocumentToDetailedContent = (
  document: HydratedDocument<ContentRepositorySchema>,
): DetailedContent => ({
  id: document._id.toHexString(),
  title: document.title,
  subtitle: document.subtitle,
  username: document.username,
  description: document.description,
  media: {
    type: document.media.type,
    video: document.media.video,
  },
});

export default contentDocumentToDetailedContent;
