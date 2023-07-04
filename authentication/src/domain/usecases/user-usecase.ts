import {
  UpdateUser,
  RestrictedUser,
} from '../entities/user/user-entities';
import FileService from '../services/file-service';
import SecurityService from '../services/security-service';
import IUserRepository from '../repositories/user-repository';

abstract class UserUsecase {
  constructor(
    protected fileService: FileService,
    protected userRepository: IUserRepository,
    protected securityService: SecurityService,
  ) {}

  abstract getUserByUsername: (username: string) => Promise<RestrictedUser>;

  abstract updateUserByUsername: (username: string, payload: UpdateUser) => Promise<RestrictedUser>;
}

export default UserUsecase;
