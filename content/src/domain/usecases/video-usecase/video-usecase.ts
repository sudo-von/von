import {
  Video,
  CreateBasicVideo,
  UpdateBasicVideo,
} from '../../entities/video-entity/video-entities';
import IUserRepository from '../../repositories/user-repository/user-repository';
import IVideoRepository from '../../repositories/video-repository/video-repository';

abstract class VideoUsecase {
  /**
  * Creates an instance of VideoUsecase.
  * @param {IUserRepository} userRepository - The user repository.
  * @param {IVideoRepository} videoRepository - The video repository.
  */
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly videoRepository: IVideoRepository,
  ) {}

  abstract getVideoById: (id: string)
  => Promise<Video>;

  abstract updateVideoById: (id: string, payload: UpdateBasicVideo)
  => Promise<Video>;

  abstract createVideoByUsername: (username: string, payload: CreateBasicVideo)
  => Promise<Video>;
}

export default VideoUsecase;
