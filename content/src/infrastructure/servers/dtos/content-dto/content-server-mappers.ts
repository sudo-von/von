import {
  DetailedContentResponse,
} from './content-server-response-dtos';
import {
  DetailedContent,
} from '../../../../domain/entities/content-entity/content-entities';

const contentToDetailedContentResponse = (
  content: DetailedContent,
): DetailedContentResponse => ({
  id: content.id,
  title: content.title,
  subtitle: content.subtitle,
  username: content.username,
  description: content.description,
  media: content.media,
});

export default contentToDetailedContentResponse;
