import {
  TimelineRepositoryFilters,
} from './timeline-repository-filters';
import {
  DetailedContent,
} from '../../entities/content-entity/content-entities';
import {
  CreateTimeline,
  PartialTimeline,
} from '../../entities/timeline-entity/timeline-entities';

interface ITimelineRepositoryWriter {
  /**
  * Creates a timeline with the provided payload.
  * @param {CreateTimeline} payload - The payload for creating the timeline.
  * @returns {Promise<DetailedContent>} A promise with the created timeline.
  */
  createTimeline: (payload: CreateTimeline)
  => Promise<DetailedContent>;

  /**
  * Updates a timeline with the provided partial payload and filters.
  * @param {PartialTimeline} payload - The partial payload for updating the timeline.
  * @param {TimelineRepositoryFilters} [filters] - Optional filters for updating the timeline.
  * @returns {Promise<DetailedContent | null>} A promise with the updated timeline if found.
  */
  updateTimeline: (payload: PartialTimeline, filters?: TimelineRepositoryFilters)
  => Promise<DetailedContent | null>;
}

interface ITimelineRepository extends ITimelineRepositoryWriter {}

export default ITimelineRepository;
