import UserUsecaseApplication from '../../application/user-usecase/user-usecase';
import VectorUsecaseApplication from '../../application/vector-usecase/vector-usecase';
import VideoUsecaseApplication from '../../application/video-usecase/video-usecase';
import IUserRepository from '../../domain/repositories/user-repository/user-repository';
import IVectorRepository from '../../domain/repositories/vector-repository/vector-repository';
import IVideoRepository from '../../domain/repositories/video-repository/video-repository';
import FileService from '../../domain/services/file-service/file-service';
import ISecurityService from '../../domain/services/security-service/security-service';

const configureUsecases = (
  fileService: FileService,
  userRepository: IUserRepository,
  securityService: ISecurityService,
  videoRepository: IVideoRepository,
  vectorRepository: IVectorRepository,
) => {
  const userUsecase = new UserUsecaseApplication(userRepository, videoRepository);

  const videoUsecase = new VideoUsecaseApplication(userRepository, videoRepository);

  const vectorUsecase = new VectorUsecaseApplication(
    fileService,
    userRepository,
    securityService,
    vectorRepository,
  );

  return {
    userUsecase,
    videoUsecase,
    vectorUsecase,
  };
};

export default configureUsecases;
