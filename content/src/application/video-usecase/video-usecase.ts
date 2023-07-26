import {
  VideoNotFoundError,
  VideoUpdateFailedError,
  VideoCreationFailedError,
} from '../../domain/entities/video-entity/video-errors';
import {
  CreateVideo,
  UpdateVideo,
} from '../../domain/entities/video-entity/video-entitites';
import {
  ContentNotFoundError,
} from '../../domain/entities/content-entity/content-errors';
import {
  DetailedContent,
} from '../../domain/entities/content-entity/content-entities';
import VideoUsecase from '../../domain/usecases/video-usecase/video-usecase';
import validateVideoUpdate from '../../domain/entities/video-entity/video-validations/update-content-validations';
import validateVideoCreation from '../../domain/entities/video-entity/video-validations/create-video-validations';

class VideoUsecaseApplication extends VideoUsecase {
  createVideoByContentId = async (
    id: string,
    payload: CreateVideo,
  ): Promise<DetailedContent> => {
    validateVideoCreation(payload);

    const content = await this.contentRepository.getContent({ id });
    if (!content) throw ContentNotFoundError;

    const createdVideo = await this.contentRepository.updateContent({
      media: {
        type: 'video',
        alt: payload.alt,
        url: payload.url,
      },
    }, { id });
    if (!createdVideo) throw VideoCreationFailedError;

    return createdVideo;
  };

  updateVideoById = async (
    id: string,
    payload: UpdateVideo,
  ): Promise<DetailedContent> => {
    validateVideoUpdate(payload);

    const content = await this.contentRepository.getContent({ media: { type: 'video', id } });
    if (!content) throw VideoNotFoundError;

    const updatedVideo = await this.contentRepository.updateContent({
      media: {
        type: 'video',
        alt: payload.alt,
        url: payload.url,
      },
    }, { media: { type: 'video', id } });
    if (!updatedVideo) throw VideoUpdateFailedError;

    return updatedVideo;
  };
}

export default VideoUsecaseApplication;
