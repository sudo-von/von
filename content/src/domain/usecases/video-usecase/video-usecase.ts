import {
  Video,
  CreateVideo,
  UpdateVideo,
} from '../../entities/video-entity/video-entitites';
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
  * @returns {Promise<Video>} - A promise with the created video object.
  */
  abstract createVideoByContentId: (id: string, payload: CreateVideo)
  => Promise<Video>;

  /**
  * Updates a video by ID.
  * @param {string} id - The ID of the video.
  * @param {UpdateVideo} payload - The object containing the data to update the video.
  * @returns {Promise<Video>} - A promise with the updated video object.
  */
  abstract updateVideoById: (id: string, payload: UpdateVideo)
  => Promise<Video>;
}

export default VideoUsecase;
