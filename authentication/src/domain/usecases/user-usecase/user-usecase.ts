import {
  SecureUser,
  UpdateUser,
} from '../../entities/user-entity/user-entities';
import SecurityService from '../../services/security-service';
import IUserRepository from '../../repositories/user-repository/user-repository';

abstract class UserUsecase {
  /**
  * Creates an instance of UserUsecase.
  * @param {IUserRepository} userRepository - The user repository.
  * @param {SecurityService} securityService - The security service for cryptographic operations.
  */
  constructor(
    protected userRepository: IUserRepository,
    protected securityService: SecurityService,
  ) {}

  /**
  * Retrieves a user by their username.
  * @param username The username of the user.
  * @returns A promise that resolves with the secure user object.
  */
  abstract getUserByUsername: (username: string)
  => Promise<SecureUser>;

  /**
  * Updates a user by their username with the provided payload.
  * @param username The username of the user.
  * @param payload The updated user object.
  * @returns A promise that resolves with the updated secure user object.
  */
  abstract updateUserByUsername: (username: string, payload: UpdateUser)
  => Promise<SecureUser>;
}

export default UserUsecase;
