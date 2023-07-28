import {
  VideoMedia,
  CreateVideoMedia,
} from '../media-entity/media-entities';
import {
  GenericContent,
  CreateGenericContent,
  CreateBasicGenericContent,
  UpdateBasicGenericContent,
} from '../generic-content-entity/generic-content-entities';

/* Repositories. */
export type Video = GenericContent<VideoMedia>;

export type CreateVideo = CreateGenericContent<CreateVideoMedia>;

export type PartialVideo = Partial<Video>;

/* Usecases. */
export type CreateBasicVideo = CreateBasicGenericContent<Omit<CreateVideoMedia, 'type'>>;

export type UpdateBasicVideo = UpdateBasicGenericContent<Omit<CreateVideoMedia, 'type'>>;
