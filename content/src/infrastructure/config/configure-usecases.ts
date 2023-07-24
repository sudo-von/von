import UserUsecaseApplication from '../../application/user-usecase/user-usecase';
import IUserRepository from '../../domain/repositories/user-repository/user-repository';
import IContentRepository from '../../domain/repositories/content-repository/content-repository';

const configureUsecases = (
  userRepository: IUserRepository,
  contentRepository: IContentRepository,
) => {
  const userUsecase = new UserUsecaseApplication(userRepository, contentRepository);

  const contentUsecase = new UserUsecaseApplication(userRepository, contentRepository);

  return {
    userUsecase,
    contentUsecase,
  };
};

export default configureUsecases;
