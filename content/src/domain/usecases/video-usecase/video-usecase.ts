import {
  Video,
  CreateVideo,
  UpdateVideo,
} from '../../entities/video-entity/video-entitites';
import IVideoRepository from '../../repositories/video-repository/video-repository';
import IContentRepository from '../../repositories/content-repository/content-repository';
import IUserRepository from '../../repositories/user-repository/user-repository';
import { CreateVideoContent, VideoContent } from '../../entities/content-entity/content-entities';

abstract class VideoUsecase {
  /**
  * Creates an instance of VideoUsecase.
  * @param {IVideoRepository} videoRepository - The content repository.
  * @param {IContentRepository} contentRepository - The content repository.
  */
  constructor(
    protected readonly videoRepository: IVideoRepository,
    protected readonly userRepository: IUserRepository,
    protected readonly contentRepository: IContentRepository,
  ) {}

  /**
  * Updates a video by ID.
  * @param {string} id - The ID of the video.
  * @param {UpdateVideo} payload - The object containing the data to update the video.
  * @returns {Promise<Video>} - A promise with the updated content video object.
  */
  abstract updateVideoById: (id: string, payload: UpdateVideo)
  => Promise<Video>;

  abstract createVideoContentByUsername: (username: string, payload: CreateVideoContent)
  => Promise<VideoContent>;
}

export default VideoUsecase;
