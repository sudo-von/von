import {
  VideoMedia,
  CreateVideoMedia,
} from '../media-entity/media-entities';
import {
  Content,
  CreateContent,
  CreateBasicContent,
  UpdateBasicContent,
} from '../content-entity/content-entities';

/* Repositories. */
export type Video = Content<VideoMedia>;

export type CreateVideo = CreateContent<CreateVideoMedia>;

export type PartialVideo = Partial<Video>;

/* Usecases. */
export type CreateBasicVideo = CreateBasicContent<Omit<CreateVideoMedia, 'type'>>;

export type UpdateBasicVideo = UpdateBasicContent<Omit<CreateVideoMedia, 'type'>>;
