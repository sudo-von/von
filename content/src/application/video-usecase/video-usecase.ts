import {
  UserNotFoundError,
} from '../../domain/entities/user-entity/user-errors';
import {
  VideoNotFoundError,
  VideoUpdateFailedError,
} from '../../domain/entities/video-entity/video-errors';
import {
  Video,
  UpdateVideo,
} from '../../domain/entities/video-entity/video-entitites';
import {
  DetailedContent,
  CreateVideoContent,
} from '../../domain/entities/content-entity/content-entities';
import VideoUsecase from '../../domain/usecases/video-usecase/video-usecase';
import validateVideoUpdate from '../../domain/entities/video-entity/video-validations/update-content-validations';
import validateVideoContentCreation from '../../domain/entities/content-entity/content-validations/create-video-content-validations';

class VideoUsecaseApplication extends VideoUsecase {
  updateVideoById = async (
    id: string,
    payload: UpdateVideo,
  ): Promise<Video> => {
    validateVideoUpdate(payload);

    const video = await this.videoRepository.getVideoById(id);
    if (!video) throw VideoNotFoundError;

    const updatedVideo = await this.videoRepository.updateVideoById(id, {
      url: payload.url,
    });
    if (!updatedVideo) throw VideoUpdateFailedError;

    return updatedVideo;
  };

  createVideoContentByUsername = async (
    username: string,
    payload: CreateVideoContent,
  ): Promise<DetailedContent> => {
    validateVideoContentCreation(payload);

    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const createdContent = await this.contentRepository.createContent({
      title: payload.title,
      subtitle: payload.subtitle,
      description: payload.description,
      username,
      media: {
        type: 'video',
        video: {
          url: payload.media.video.url,
        },
      },
    });

    return createdContent;
  };
}

export default VideoUsecaseApplication;
