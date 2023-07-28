import {
  ContentResponse,
} from './content-server-response-dtos';
import {
  Content,
} from '../../../../domain/entities/content-entity/content-entities';
import { Media } from '../../../../domain/entities/media-entity/media-entities';

const contentToContentResponse = (
  content: Content,
): ContentResponse => {
  console.log('🚀 ~ file: content-server-mappers.ts:12 ~ content:', content);
  let media: Media = {
    type: 'empty-media',
  };

  if (content.media.type === 'video') {
    media = {
      type: 'video',
      url: content.media.url,
    };
  }

  return ({
    id: content.id,
    title: content.title,
    subtitle: content.subtitle,
    username: content.username,
    description: content.description,
    media,
  });
};

export default contentToContentResponse;
