import {
  PartialVideo,
} from '../../entities/video-entity/video-entities';

export type VideoRepositoryFilters = Pick<PartialVideo, 'id' | 'username'>;
