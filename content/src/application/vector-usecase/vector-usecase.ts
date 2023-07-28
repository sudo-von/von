import {
  UserNotFoundError,
} from '../../domain/entities/user-entity/user-errors';
import {
  VectorCollection,
  CreateVectorFileCollection,
} from '../../domain/entities/vector-entity/vector-entities';
import VectorUsecase from '../../domain/usecases/vector-usecase/vector-usecase';
import validateVectorCreation from '../../domain/entities/vector-entity/vector-validations/create-vector-validations';
import validateContentCreation from '../../domain/entities/content-entity/content-validations/create-content-validations';

class VectorUsecaseApplication extends VectorUsecase {
  createVectorByUsername = async (
    username: string,
    payload: CreateVectorFileCollection,
  ): Promise<VectorCollection> => {
    validateContentCreation(payload);

    payload.media.vectors.map((p) => validateVectorCreation(p));

    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const createVectorMedia = await Promise.all(
      payload.media.vectors.map(async (p) => {
        const filename = `${this.securityService.hashData(new Date().toISOString(), 'md5')}.svg`;
        await this.fileService.upload(filename, p.buffer);
        return ({
          filename,
          description: p.description,
        });
      }),
    );

    const createdVectorCollection = await this.vectorRepository.createVector({
      title: payload.title,
      subtitle: payload.subtitle,
      description: payload.description,
      username,
      media: {
        type: 'vector-collection',
        vectors: createVectorMedia,
      },
    });

    return createdVectorCollection;
  };
}

export default VectorUsecaseApplication;
