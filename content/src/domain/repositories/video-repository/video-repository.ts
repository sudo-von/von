import {
  VideoRepositoryFilters,
} from './video-repository-filters';
import {
  Video,
  CreateVideo,
  PartialVideo,
} from '../../entities/video-entity/video-entities';

/**
* Interface for reading video data from the repository.
* @interface
*/
interface IVideoRepositoryReader {
  /**
  * Get a video based on optional filters.
  * @param {VideoRepositoryFilters} [filters] - Optional filters for querying videos.
  * @returns {Promise<Video | null>} A Promise that resolves to a Video object if found.
  */
  getVideo: (filters?: VideoRepositoryFilters)
  => Promise<Video | null>;
}

/**
* Interface for writing video data to the repository.
* @interface
*/
interface IVideoRepositoryWriter {
  /**
  * Create a new video entry.
  * @param {CreateVideo} payload - The data required to create a new video.
  * @returns {Promise<Video>} A Promise that resolves to the newly created Video object.
  */
  createVideo: (payload: CreateVideo)
  => Promise<Video>;

  /**
  * Update a video based on specified partial data and optional filters.
  * @param {PartialVideo} payload - The partial data to update the video with.
  * @param {VideoRepositoryFilters} [filters] - Optional filters for querying videos.
  * @returns {Promise<Video | null>} A Promise that resolves to the updated Video object if found.
  */
  updateVideo: (payload: PartialVideo, filters?: VideoRepositoryFilters)
  => Promise<Video | null>;

  /**
  * Update multiple videos based on specified partial data and optional filters.
  * @param {PartialVideo} payload - The partial data to update the videos with.
  * @param {VideoRepositoryFilters} [filters] - Optional filters for querying videos.
  * @returns {Promise<void>} A Promise that resolves when the update operation is completed.
  */
  updateVideos: (payload: PartialVideo, filters?: VideoRepositoryFilters)
  => Promise<void>;
}

/**
* Combined interface that extends both IVideoRepositoryReader and IVideoRepositoryWriter.
* @interface
* @extends IVideoRepositoryReader
* @extends IVideoRepositoryWriter
*/
interface IVideoRepository extends IVideoRepositoryReader, IVideoRepositoryWriter {}

export default IVideoRepository;
