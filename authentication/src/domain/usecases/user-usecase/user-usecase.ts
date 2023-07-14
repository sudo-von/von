import {
  SecureUser,
  UpdateUserWithFile,
} from '../../entities/user-entity/user-entities';
import FileService from '../../services/file-service';
import SecurityService from '../../services/security-service';
import IUserRepository from '../../repositories/user-repository/user-repository';

abstract class UserUsecase {
  constructor(
    protected fileService: FileService,
    protected userRepository: IUserRepository,
    protected securityService: SecurityService,
  ) {}

  abstract getUserByUsername: (username: string)
  => Promise<SecureUser>;

  abstract updateUserByUsername: (username: string, payload: UpdateUserWithFile)
  => Promise<SecureUser>;
}

export default UserUsecase;
