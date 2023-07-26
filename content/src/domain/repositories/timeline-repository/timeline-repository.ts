import {
  TimelineRepositoryFilters,
} from './timeline-repository-filters';
import {
  Timeline,
  CreateTimeline,
  PartialTimeline,
} from '../../entities/timeline-entity/timeline-entities';

interface ITimelineRepositoryReader {
  /**
  * Retrieves a timeline based on the provided filters.
  * @param {TimelineRepositoryFilters} [filters] - Optional filters for retrieving the timeline.
  * @returns {Promise<Timeline | null>} A promise with the retrieved timeline if found.
  */
  getTimeline: (filters?: TimelineRepositoryFilters)
  => Promise<Timeline | null>;
}

interface ITimelineRepositoryWriter {
  /**
  * Creates a timeline with the provided payload.
  * @param {CreateTimeline} payload - The payload for creating the timeline.
  * @returns {Promise<Timeline>} A promise with the created timeline.
  */
  createTimeline: (payload: CreateTimeline)
  => Promise<Timeline>;

  /**
  * Updates a timeline with the provided partial payload and filters.
  * @param {PartialTimeline} payload - The partial payload for updating the timeline.
  * @param {TimelineRepositoryFilters} [filters] - Optional filters for updating the timeline.
  * @returns {Promise<Timeline | null>} A promise with the updated timeline if found.
  */
  updateTimeline: (payload: PartialTimeline, filters?: TimelineRepositoryFilters)
  => Promise<Timeline | null>;
}

interface ITimelineRepository extends ITimelineRepositoryReader, ITimelineRepositoryWriter {}

export default ITimelineRepository;
