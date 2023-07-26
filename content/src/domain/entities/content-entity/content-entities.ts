import {
  Video,
} from '../video-entity/video-entitites';
import {
  VectorCollection,
} from '../vector-entity/vector-entities';
import {
  TimelineCollection,
} from '../timeline-entity/timeline-entities';

export type DetailedContentMedia = Partial<Video | VectorCollection | TimelineCollection>;

export type DetailedContent = Readonly<{
  id: string;
  title: string;
  subtitle: string;
  username: string;
  description: string;
  media?: DetailedContentMedia;
}>;

export type PartialDetailedContent = Readonly<Partial<DetailedContent> & {
  media?: DetailedContentMedia;
}>;

export type CreateDetailedContent = Omit<DetailedContent, 'id'>;

export type CreateContent = Pick<DetailedContent, 'title' | 'subtitle' | 'description'>;

export type UpdateContent = Pick<DetailedContent, 'title' | 'subtitle' | 'description'>;
