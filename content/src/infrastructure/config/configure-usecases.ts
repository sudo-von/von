import UserUsecaseApplication from '../../application/user-usecase/user-usecase';
import IUserRepository from '../../domain/repositories/user-repository/user-repository';
import ContentUsecaseApplication from '../../application/content-usecase/content-usecase';
import IContentRepository from '../../domain/repositories/content-repository/content-repository';
import VideoUsecaseApplication from '../../application/video-usecase/video-usecase';
import IVideoRepository from '../../domain/repositories/video-repository/video-repository';

const configureUsecases = (
  userRepository: IUserRepository,
  videoRepository: IVideoRepository,
  contentRepository: IContentRepository,
) => {
  const userUsecase = new UserUsecaseApplication(userRepository, contentRepository);

  const contentUsecase = new ContentUsecaseApplication(userRepository, contentRepository);

  const videoUsecase = new VideoUsecaseApplication(
    videoRepository,
    userRepository,
    contentRepository,
  );

  return {
    userUsecase,
    contentUsecase,
    videoUsecase,
  };
};

export default configureUsecases;
