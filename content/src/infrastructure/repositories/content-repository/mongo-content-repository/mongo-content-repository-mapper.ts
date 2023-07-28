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
  console.log('🚀 ~ file: mongo-content-repository-mapper.ts:17 ~ document:', document);
  let media: Media = {
    type: 'empty-media',
  };

  if (document.media.type === 'video') {
    media = {
      type: 'video',
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
