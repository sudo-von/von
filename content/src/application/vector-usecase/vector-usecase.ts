import {
  VectorNotFoundError,
  VectorUpdateFailedError,
} from '../../domain/entities/vector-entity/vector-errors';
import {
  ContentNotFoundError,
} from '../../domain/entities/content-entity/content-errors';
import {
  Vector,
  CreateVectorFile,
  UpdateVectorFile,
} from '../../domain/entities/vector-entity/vector-entities';
import VectorUsecase from '../../domain/usecases/vector-usecase/vector-usecase';
import validateVectorFileUpdate from '../../domain/entities/vector-entity/vector-validations/update-vector-file-validations';
import validateVectorFileCreation from '../../domain/entities/vector-entity/vector-validations/create-vector-file-validations';

class VectorUsecaseApplication extends VectorUsecase {
  generateVectorFilename = ():string => {
    const hash = this.securityService.hashData(new Date().toISOString(), 'md5');
    const filename = `${hash}.svg`;
    return filename;
  };

  createVectorByContentId = async (
    id: string,
    payload: CreateVectorFile,
  ): Promise<Vector> => {
    validateVectorFileCreation(payload);

    const content = await this.contentRepository.getContent({ id });
    if (!content) throw ContentNotFoundError;

    const vectorFilename = this.generateVectorFilename();

    await this.fileService.upload(vectorFilename, payload.buffer);

    const createdVector = await this.vectorRepository.createVector({
      alt: payload.alt,
      filename: vectorFilename,
    });

    return createdVector;
  };

  updateVectorById = async (
    id: string,
    payload: UpdateVectorFile,
  ): Promise<Vector> => {
    validateVectorFileUpdate(payload);

    const video = await this.vectorRepository.getVector({ id });
    if (!video) throw VectorNotFoundError;

    await this.fileService.delete(video.filename);

    const vectorFilename = this.generateVectorFilename();

    const updatedVector = await this.vectorRepository.updatevector({
      alt: payload.alt,
      filename: vectorFilename,
    }, { id });
    if (!updatedVector) throw VectorUpdateFailedError;

    return updatedVector;
  };
}

export default VectorUsecaseApplication;
