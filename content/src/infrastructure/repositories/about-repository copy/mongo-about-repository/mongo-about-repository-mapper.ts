import {
  HydratedDocument,
} from 'mongoose';
import {
  About,
} from '../../../../domain/entities/about-entity/about-entities';
import {
  AboutRepositorySchema,
} from '../../../../domain/repositories/about-repository/about-repository-schema';

const aboutDocumentToAbout = (
  document: HydratedDocument<AboutRepositorySchema>,
): About => ({
  id: document._id.toHexString(),
  title: document.title,
  subtitle: document.subtitle,
  username: document.username,
  description: document.description,
  media: {
    url: document.media.url,
  },
});

export default aboutDocumentToAbout;
