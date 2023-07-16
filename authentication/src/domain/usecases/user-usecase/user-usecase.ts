import {
  SecureUser,
  UpdateUser,
} from '../../entities/user-entity/user-entities';
import IUserRepository from '../../repositories/user-repository/user-repository';
import IPasswordManagerService from '../../services/password-manager-service/password-manager-service';

abstract class UserUsecase {
  /**
  * Creates an instance of UserUsecase.
  * @param {IUserRepository} userRepository - The user repository.
  * @param {IPasswordManagerService} passwordManagerService - The password manager service.
  */
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly passwordManagerService: IPasswordManagerService,
  ) {}

  /**
  * Retrieves a user by their username.
  * @param username The username of the user.
  * @returns A promise with the secure user object.
  */
  abstract getUserByUsername: (username: string)
  => Promise<SecureUser>;

  /**
  * Updates a user by their username with the provided payload.
  * @param username The username of the user.
  * @param payload The updated user object.
  * @returns A promise with the updated secure user object.
  */
  abstract updateUserByUsername: (username: string, payload: UpdateUser)
  => Promise<SecureUser>;
}

export default UserUsecase;
