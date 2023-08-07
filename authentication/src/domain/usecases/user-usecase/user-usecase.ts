import {
  UpdateUser,
  DetailedSecureUser,
} from '../../entities/user-entity/user-entities';
import IUserRepository from '../../repositories/user-repository/user-repository';
import IPasswordManagerService from '../../services/password-manager-service/password-manager-service';

abstract class UserUsecase {
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly passwordManagerService: IPasswordManagerService,
  ) {}

  abstract getUserByUsername: (username: string)
  => Promise<DetailedSecureUser>;

  abstract updateUserByUsername: (username: string, payload: UpdateUser)
  => Promise<DetailedSecureUser>;
}

export default UserUsecase;
