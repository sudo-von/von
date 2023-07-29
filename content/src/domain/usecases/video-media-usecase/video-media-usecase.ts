import {
  Content,
} from '../../entities/content-entity/content-entities';
import {
  UpdateVideoMedia,
} from '../../entities/video-media-entity/video-media-entities';
import IContentRepository from '../../repositories/content-repository/content-repository';

abstract class VideoMediaUsecase {
  constructor(protected readonly contentRepository: IContentRepository) {}

  abstract setVideoMediaByContentId: (id: string, payload: UpdateVideoMedia)
  => Promise<Content>;
}

export default VideoMediaUsecase;
