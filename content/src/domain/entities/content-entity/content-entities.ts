import {
  Media,
  VideoMedia,
  CreateMedia,
  CreateVideoMedia,
} from '../media-entity/media-entities';

export type DetailedContent = {
  id: string;
  title: string;
  subtitle: string;
  username: string;
  description: string;
  media: Media;
};

export type CreateDetailedContent = Omit<DetailedContent, 'id' | 'media'> & {
  media: CreateMedia;
};

export type UpdateDetailedContent = Omit<DetailedContent, 'id' | 'media' | 'username'>;

export type PartialDetailedContent = Partial<DetailedContent>;

export type VideoContent = Omit<DetailedContent, 'media'> & {
  media: VideoMedia;
};

export type CreateVideoContent = Omit<DetailedContent, 'id' | 'media'> & {
  media: Omit<CreateVideoMedia, 'type'>;
};
