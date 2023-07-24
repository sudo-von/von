import {
  Video,
} from '../video-entity/video-entitites';
import {
  VectorCollection,
} from '../vector-entity/vector-entities';
import {
  TimelineCollection,
} from '../timeline-entity/timeline-entities';

export type DetailedContentMedia = Video | VectorCollection | TimelineCollection;

export type DetailedContentType = 'video' | 'vector-collection' | 'timeline-collection';

export type DetailedContent = Readonly<{
  id: string;
  title: string;
  subtitle: string;
  username: string;
  description: string;
  type?: DetailedContentType;
  media?: DetailedContentMedia;
}>;

export type PartialDetailedContent = Partial<DetailedContent>;

export type CreateDetailedContent = Omit<DetailedContent, 'id'>;

export type CreateContent = Omit<DetailedContent, 'id' | 'username' | 'type' | 'media'>;

export type UpdateContent = Omit<DetailedContent, 'id' | 'username' | 'type' | 'media'>;
