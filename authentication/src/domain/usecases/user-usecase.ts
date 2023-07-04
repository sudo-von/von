import {
  UpdateUserEntity,
  RestrictedUserEntity,
} from '../entities/user/user-entity';
import FileService from '../services/file-service';
import SecurityService from '../services/security-service';
import IUserRepository from '../repositories/user-repository';

abstract class UserUsecase {
  constructor(
    protected fileService: FileService,
    protected userRepository: IUserRepository,
    protected securityService: SecurityService,
  ) {}

  abstract getUserByUsername: (username: string) => Promise<RestrictedUserEntity>;

  abstract updateUserByUsername: (
    requestingUsername: string,
    requestedUsername: string,
    payload: UpdateUserEntity
  ) => Promise<RestrictedUserEntity>;
}

export default UserUsecase;
