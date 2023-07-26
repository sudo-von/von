import {
  VideoNotFoundError,
  VideoUpdateFailedError,
} from '../../domain/entities/video-entity/video-errors';
import {
  ContentNotFoundError,
} from '../../domain/entities/content-entity/content-errors';
import {
  Video,
  CreateVideo,
  UpdateVideo,
} from '../../domain/entities/video-entity/video-entitites';
import VideoUsecase from '../../domain/usecases/video-usecase/video-usecase';
import validateVideoUpdate from '../../domain/entities/video-entity/video-validations/update-content-validations';
import validateVideoCreation from '../../domain/entities/video-entity/video-validations/create-video-validations';

class VideoUsecaseApplication extends VideoUsecase {
  createVideoByContentId = async (
    id: string,
    payload: CreateVideo,
  ): Promise<Video> => {
    validateVideoCreation(payload);

    const content = await this.contentRepository.getContent({ id });
    if (!content) throw ContentNotFoundError;

    const createdVideo = await this.videoRepository.createVideo({
      alt: payload.alt,
      url: payload.url,
    });

    return createdVideo;
  };

  updateVideoById = async (
    id: string,
    payload: UpdateVideo,
  ): Promise<Video> => {
    validateVideoUpdate(payload);

    const video = await this.videoRepository.getVideo({ id });
    if (!video) throw VideoNotFoundError;

    const updatedVideo = await this.videoRepository.updateVideo({
      alt: payload.alt,
      url: payload.url,
    }, { id });
    if (!updatedVideo) throw VideoUpdateFailedError;

    return updatedVideo;
  };
}

export default VideoUsecaseApplication;
