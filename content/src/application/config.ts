import UserUsecaseApplication from './user-usecase-application';
import IUserRepository from '../domain/repositories/user-repository';
import ProfileUsecaseApplication from './profile-usecase-application';
import IProfileRepository from '../domain/repositories/profile-repository';

const configureUsecases = (
  userRepository: IUserRepository,
  profileRepository: IProfileRepository,
) => {
  const userUsecase = new UserUsecaseApplication(userRepository);
  const profileUsecase = new ProfileUsecaseApplication(userRepository, profileRepository);

  console.log('📖 Usecases have been configured.');

  return { userUsecase, profileUsecase };
};

export default configureUsecases;
