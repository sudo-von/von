import {
  UserNotFoundError,
} from '../../domain/entities/user-entity/user-errors';
import {
  VideoNotFoundError,
  VideoUpdateFailedError,
} from '../../domain/entities/video-entity/video-errors';
import {
  Video,
  CreateBasicVideo,
  UpdateBasicVideo,
} from '../../domain/entities/video-entity/video-entities';
import VideoUsecase from '../../domain/usecases/video-usecase/video-usecase';
import validateVideoUpdate from '../../domain/entities/video-entity/video-validations/update-video-validations';
import validateVideoCreation from '../../domain/entities/video-entity/video-validations/create-video-validations';

class VideoUsecaseApplication extends VideoUsecase {
  getVideoById = async (
    id: string,
  ): Promise<Video> => {
    const video = await this.videoRepository.getVideo({ id });
    if (!video) throw VideoNotFoundError;

    return video;
  };

  createVideoByUsername = async (
    username: string,
    payload: CreateBasicVideo,
  ): Promise<Video> => {
    validateVideoCreation(payload);

    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const createdVideo = await this.videoRepository.createVideo({
      title: payload.title,
      subtitle: payload.subtitle,
      description: payload.description,
      username,
      media: {
        type: 'video',
        url: payload.media.url,
      },
    });

    return createdVideo;
  };

  updateVideoById = async (
    id: string,
    payload: UpdateBasicVideo,
  ): Promise<Video> => {
    validateVideoUpdate(payload);

    const video = await this.videoRepository.getVideo({ id });
    if (!video) throw VideoNotFoundError;

    const updatedVideo = await this.videoRepository.updateVideo({
      title: payload.title,
      subtitle: payload.subtitle,
      description: payload.description,
      media: {
        type: 'video',
        url: payload.media.url,
      },
    }, { id });
    if (!updatedVideo) throw VideoUpdateFailedError;

    return updatedVideo;
  };
}

export default VideoUsecaseApplication;
