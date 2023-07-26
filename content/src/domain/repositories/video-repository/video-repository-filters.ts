import {
  PartialVideo,
} from '../../entities/video-entity/video-entitites';

export type VideoRepositoryFilters = Omit<PartialVideo, 'type'>;
