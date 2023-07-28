import {
  VideoResponse,
} from './video-server-response-dtos';
import {
  Video,
} from '../../../../domain/entities/video-entity/video-entities';

const videoToVideoResponse = (
  video: Video,
): VideoResponse => ({
  id: video.id,
  title: video.title,
  subtitle: video.subtitle,
  username: video.username,
  description: video.description,
  media: {
    url: video.media.url,
    type: video.media.type,
  },
});

export default videoToVideoResponse;
