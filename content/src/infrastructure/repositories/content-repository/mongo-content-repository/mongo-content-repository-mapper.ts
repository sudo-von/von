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
  type: document.type,
  title: document.title,
  subtitle: document.subtitle,
  username: document.username,
  description: document.description,
});

export default contentDocumentToDetailedContent;
