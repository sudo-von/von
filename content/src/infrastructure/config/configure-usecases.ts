import UserUsecaseApplication from '../../application/user-usecase/user-usecase';
import AboutUsecaseApplication from '../../application/about-usecase/about-usecase';
import IUserRepository from '../../domain/repositories/user-repository/user-repository';
import IAboutRepository from '../../domain/repositories/about-repository/about-repository';

const configureUsecases = (
  userRepository: IUserRepository,
  aboutRepository: IAboutRepository,
) => {
  const userUsecase = new UserUsecaseApplication(userRepository, aboutRepository);

  const aboutUsecase = new AboutUsecaseApplication(userRepository, aboutRepository);

  return {
    userUsecase,
    aboutUsecase,
  };
};

export default configureUsecases;
