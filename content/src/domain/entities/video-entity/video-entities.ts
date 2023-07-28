import {
  Content,
  CreateContent,
  CreateBasicContent,
  UpdateBasicContent,
} from '../content-entity/content-entities';

export type VideoMedia = {
  url: string;
  type: 'video';
};

export type Video = Content<VideoMedia>;

export type CreateVideo = CreateContent<VideoMedia>;

export type PartialVideo = Partial<Video>;

export type CreateBasicVideo = CreateBasicContent<Omit<VideoMedia, 'type'>>;

export type UpdateBasicVideo = UpdateBasicContent<Omit<VideoMedia, 'type'>>;
