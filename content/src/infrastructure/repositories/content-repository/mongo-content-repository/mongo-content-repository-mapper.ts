import {
  HydratedDocument,
} from 'mongoose';
import {
  Media,
} from '../../../../domain/entities/media-entity/media-entities';
import {
  Content,
} from '../../../../domain/entities/content-entity/content-entities';
import {
  ContentRepositorySchema,
} from '../../../../domain/repositories/content-repository/content-repository-schema';

const contentDocumentToContent = (
  document: HydratedDocument<ContentRepositorySchema>,
): Content => {
  let media: Media = {
    type: 'empty-media',
  };

  if (document.media.type === 'video-media') {
    media = {
      type: 'video-media',
      url: document.media.url,
    };
  }

  return ({
    id: document._id.toHexString(),
    title: document.title,
    subtitle: document.subtitle,
    username: document.username,
    description: document.description,
    media,
  });
};

export default contentDocumentToContent;
