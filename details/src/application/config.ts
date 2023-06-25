import UserUsecaseApplication from './user-usecase-application';
import IUserRepository from '../domain/repositories/user-repository';
import ProfileUsecaseApplication from './profile-usecase-application';
import IProfileRepository from '../domain/repositories/profile-repository';

const configureUsecases = (
  userRepository: IUserRepository,
  profileRepository: IProfileRepository,
) => {
  const userUsecase = new UserUsecaseApplication(userRepository);
  const profileUsecase = new ProfileUsecaseApplication(profileRepository);

  return { userUsecase, profileUsecase };
};

export default configureUsecases;
