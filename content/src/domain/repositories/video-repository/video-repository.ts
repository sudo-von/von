import {
  VideoRepositoryFilters,
} from './video-repository-filters';
import {
  DetailedContent,
} from '../../entities/content-entity/content-entities';
import { CreateVideo, PartialVideo } from '../../entities/video-entity/video-entitites';

interface IVideoRepositoryWriter {
  /**
  * Creates a video with the provided payload.
  * @param {CreateVideo} payload - The payload for creating the video.
  * @returns {Promise<DetailedContent>} A promise that resolves with the created video.
  */
  createVideo: (payload: CreateVideo)
  => Promise<DetailedContent>;

  /**
  * Updates a video with the provided partial payload and filters.
  * @param {PartialVideo} payload - The partial payload for updating the video.
  * @param {VideoRepositoryFilters} [filters] - Optional filters for updating the video.
  * @returns {Promise<DetailedContent | null>} A promise with the updated video if found.
  */
  updateVideo: (payload: PartialVideo, filters?: VideoRepositoryFilters)
  => Promise<DetailedContent | null>;
}

interface IVideoRepository extends IVideoRepositoryWriter {}

export default IVideoRepository;
