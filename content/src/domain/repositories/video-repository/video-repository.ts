import {
  VideoRepositoryFilters,
} from './video-repository-filters';
import {
  Video,
  CreateVideo,
  PartialVideo,
} from '../../entities/video-entity/video-entitites';

interface IVideoRepositoryReader {
  /**
  * Retrieves a video based on the provided filters.
  * @param {VideoRepositoryFilters} [filters] - Optional filters for retrieving the video.
  * @returns {Promise<Video | null>} A promise with the retrieved video if found.
  */
  getVideo: (filters?: VideoRepositoryFilters)
  => Promise<Video | null>;
}

interface IVideoRepositoryWriter {
  /**
  * Creates a video with the provided payload.
  * @param {CreateVideo} payload - The payload for creating the video.
  * @returns {Promise<Video>} A promise with the created video.
  */
  createVideo: (payload: CreateVideo)
  => Promise<Video>;

  /**
  * Updates a video with the provided partial payload and filters.
  * @param {PartialVideo} payload - The partial payload for updating the video.
  * @param {VideoRepositoryFilters} [filters] - Optional filters for updating the video.
  * @returns {Promise<Video | null>} A promise with the updated video if found.
  */
  updateVideo: (payload: PartialVideo, filters?: VideoRepositoryFilters)
  => Promise<Video | null>;
}

interface IVideoRepository extends IVideoRepositoryReader, IVideoRepositoryWriter {}

export default IVideoRepository;
