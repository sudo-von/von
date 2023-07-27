import {
  VideoMedia,
  CreateVideoMedia,
} from '../video-entity/video-entitites';

export type DetailedContent = {
  id: string;
  title: string;
  subtitle: string;
  username: string;
  description: string;
  media: VideoMedia;
};

export type CreateDetailedContent = Omit<DetailedContent, 'id' | 'media'> & {
  media: CreateVideoMedia;
};

export type PartialDetailedContent = Partial<DetailedContent>;

export type VideoContent = Omit<DetailedContent, 'media'> & {
  media: VideoMedia;
};

export type CreateVideoContent = Omit<DetailedContent, 'id' | 'media'> & {
  media: CreateVideoMedia;
};
