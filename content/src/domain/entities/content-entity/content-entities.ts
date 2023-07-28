import {
  Media,
} from '../media-entity/media-entities';
import {
  EmptyMedia,
} from '../media-entity/empty-media-entities';
import {
  GenericContent,
  CreateGenericContent,
} from '../generic-content-entity/generic-content-entities';

export type Content = GenericContent<Media>;

export type CreateContent = CreateGenericContent<EmptyMedia>;

export type PartialContent = Partial<GenericContent<Partial<Media>>>;

export type CreateBasicContent = Pick<Content, 'title' | 'subtitle' | 'description'>;

export type UpdateBasicContent = Pick<Content, 'title' | 'subtitle' | 'description'>;
