import UserUsecaseApplication from '../../application/user-usecase/user-usecase';
import VideoUsecaseApplication from '../../application/video-usecase/video-usecase';
import IUserRepository from '../../domain/repositories/user-repository/user-repository';
import IVideoRepository from '../../domain/repositories/video-repository/video-repository';

const configureUsecases = (
  userRepository: IUserRepository,
  videoRepository: IVideoRepository,
) => {
  const userUsecase = new UserUsecaseApplication(userRepository, videoRepository);

  const videoUsecase = new VideoUsecaseApplication(userRepository, videoRepository);

  return {
    userUsecase,
    videoUsecase,
  };
};

export default configureUsecases;
