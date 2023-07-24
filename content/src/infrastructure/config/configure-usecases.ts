import UserUsecaseApplication from '../../application/user-usecase/user-usecase';
import IUserRepository from '../../domain/repositories/user-repository/user-repository';
import ContentUsecaseApplication from '../../application/content-usecase/content-usecase';
import IContentRepository from '../../domain/repositories/content-repository/content-repository';

const configureUsecases = (
  userRepository: IUserRepository,
  contentRepository: IContentRepository,
) => {
  const userUsecase = new UserUsecaseApplication(userRepository, contentRepository);

  const contentUsecase = new ContentUsecaseApplication(userRepository, contentRepository);

  return {
    userUsecase,
    contentUsecase,
  };
};

export default configureUsecases;
