import FileService from '../../domain/services/file-service/file-service';
import UserUsecaseApplication from '../../application/user-usecase/user-usecase';
import ISecurityService from '../../domain/services/security-service/security-service';
import VectorUsecaseApplication from '../../application/vector-usecase/vector-usecase';
import IUserRepository from '../../domain/repositories/user-repository/user-repository';
import ContentUsecaseApplication from '../../application/content-usecase/content-usecase';
import IVectorRepository from '../../domain/repositories/vector-repository/vector-repository';
import IContentRepository from '../../domain/repositories/content-repository/content-repository';
import VideoMediaUsecaseApplication from '../../application/video-media-usecase/video-media-usecase';

const configureUsecases = (
  fileService: FileService,
  userRepository: IUserRepository,
  securityService: ISecurityService,
  vectorRepository: IVectorRepository,
  contentRepository: IContentRepository,
) => {
  const userUsecase = new UserUsecaseApplication(userRepository, contentRepository);

  const videoMediaUsecase = new VideoMediaUsecaseApplication(contentRepository);

  const vectorUsecase = new VectorUsecaseApplication(
    fileService,
    userRepository,
    securityService,
    vectorRepository,
  );

  const contentUsecase = new ContentUsecaseApplication(
    userRepository,
    contentRepository,
  );

  return {
    userUsecase,
    vectorUsecase,
    contentUsecase,
    videoMediaUsecase,
  };
};

export default configureUsecases;
