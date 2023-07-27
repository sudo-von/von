import {
  AboutResponse,
} from './about-server-response-dtos';
import {
  About,
} from '../../../../domain/entities/about-entity/about-entities';

const aboutToAboutResponse = (
  about: About,
): AboutResponse => ({
  id: about.id,
  title: about.title,
  subtitle: about.subtitle,
  username: about.username,
  description: about.description,
  media: {
    url: about.media.url,
  },
});

export default aboutToAboutResponse;
