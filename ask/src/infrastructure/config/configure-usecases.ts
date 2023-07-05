import UserUsecaseApplication from '../../application/user-usecase';
import IUserRepository from '../../domain/repositories/user-repository';

const configureUsecases = (
  userRepository: IUserRepository,
) => {
  const userUsecase = new UserUsecaseApplication(userRepository);

  return { userUsecase };
};

export default configureUsecases;
