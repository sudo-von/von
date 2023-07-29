import {
  ContentNotFoundError,
  ContentUpdateFailedError,
} from '../../domain/entities/content-entity/content-errors';
import {
  Content,
} from '../../domain/entities/content-entity/content-entities';
import {
  UpdateVideoMedia,
} from '../../domain/entities/video-media-entity/video-media-entities';
import VideoMediaUsecase from '../../domain/usecases/video-media-usecase/video-media-usecase';
import validateVideoMediaUpdate from '../../domain/entities/video-media-entity/video-media-validations/update-video-media-validations';

class VideoMediaUsecaseApplication extends VideoMediaUsecase {
  setVideoMediaByContentId = async (
    id: string,
    payload: UpdateVideoMedia,
  ): Promise<Content> => {
    validateVideoMediaUpdate(payload);

    const content = await this.contentRepository.getContent({ id });
    if (!content) throw ContentNotFoundError;

    const updatedContent = await this.contentRepository.updateContent({
      media: {
        type: 'video-media',
        url: payload.url,
      },
    });
    if (!updatedContent) throw ContentUpdateFailedError;

    return updatedContent;
  };
}

export default VideoMediaUsecaseApplication;
