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
import VectorUsecase from '../../domain/usecases/vector-usecase/vector-usecase';
import validateVideoUpdate from '../../domain/entities/video-entity/video-validations/update-content-validations';
import validateVideoCreation from '../../domain/entities/video-entity/video-validations/create-video-validations';
import { CreateVectorFile, UpdateVectorFile, Vector } from '../../domain/entities/vector-entity/vector-entities';
import validateVectorFileCreation from '../../domain/entities/vector-entity/vector-validations/create-vector-file-validations';
import validateVectorFileUpdate from '../../domain/entities/vector-entity/vector-validations/update-vector-file-validations';

class VectorUsecaseApplication extends VectorUsecase {
  generateVectorFilename = (mimetype: string): string => {
    const hash = this.securityService.hashData(new Date().toISOString(), 'md5');
    const filename = `${hash}.svg`;
    return filename;
  };

  createVectorByContentId = async (
    id: string,
    payload: CreateVectorFile,
  ): Promise<DetailedContent> => {
    validateVectorFileCreation(payload);

    const content = await this.contentRepository.getContent({ id });
    if (!content) throw ContentNotFoundError;

    const vectors: Vector[] = (content.media && content.media.type === 'vector-collection'
    && content.media.vectors) ? content.media.vectors : [];

    const vectorFilename = this.generateVectorFilename(payload.mimetype);

    await this.fileService.upload(vectorFilename, payload.buffer);

    const createdVector = await this.contentRepository.updateContent({
      media: {
        type: 'vector-collection',
        vectors: [
          ...vectors,
          {
            id: '',
            filename: vectorFilename,
            alt: payload.alt,
          },
        ],
      },
    }, { id });
    if (!createdVector) throw VideoCreationFailedError;

    return createdVector;
  };

  updateVectorById = async (
    id: string,
    payload: UpdateVectorFile,
  ): Promise<DetailedContent> => {
    validateVectorFileUpdate(payload);

    const content = await this.contentRepository.getContent({ vectorId: id });
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

export default VectorUsecaseApplication;
