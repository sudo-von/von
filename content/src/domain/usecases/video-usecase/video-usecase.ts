import {
  CreateVideo,
  UpdateVideo,
} from '../../entities/video-entity/video-entitites';
import {
  DetailedContent,
} from '../../entities/content-entity/content-entities';
import IContentRepository from '../../repositories/content-repository/content-repository';

abstract class VideoUsecase {
  /**
  * Creates an instance of VideoUsecase.
  * @param {IContentRepository} contentRepository - The content repository.
  */
  constructor(protected readonly contentRepository: IContentRepository) {}

  /**
  * Creates a video by content ID.
  * @param {string} id - The ID of the content.
  * @param {CreateVideo} payload - The object containing the data to create the video.
  * @returns {Promise<DetailedContent>} - A promise with the created content video object.
  */
  abstract createVideoByContentId: (id: string, payload: CreateVideo)
  => Promise<DetailedContent>;

  /**
  * Updates a video by ID.
  * @param {string} id - The ID of the video.
  * @param {UpdateVideo} payload - The object containing the data to update the video.
  * @returns {Promise<DetailedContent>} - A promise with the updated content video object.
  */
  abstract updateVideoById: (id: string, payload: UpdateVideo)
  => Promise<DetailedContent>;
}

export default VideoUsecase;
