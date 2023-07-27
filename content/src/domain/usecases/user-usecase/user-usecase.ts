import {
  User,
  CreateUser,
  UpdateUser,
} from '../../entities/user-entity/user-entities';
import IUserRepository from '../../repositories/user-repository/user-repository';
import IAboutRepository from '../../repositories/about-repository/about-repository';

abstract class UserUsecase {
  /**
  * Creates an instance of UserUsecase.
  * @param {IUserRepository} userRepository - The user repository.
  * @param {IAboutRepository} aboutRepository - The about repository.
  */
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly aboutRepository: IAboutRepository,
  ) {}

  /**
  * Creates a user with the provided payload.
  * @param {CreateUser} payload - The payload for creating the user.
  * @returns {Promise<User>} A promise with the created detailed user.
  */
  abstract createUser: (payload: CreateUser)
  => Promise<User>;

  /**
  * Updates a user by user ID with the provided payload.
  * @param {string} id - The ID of the user.
  * @param {UpdateUser} payload - The payload for updating the user.
  * @returns {Promise<User>} A promise with the updated detailed user.
  */
  abstract updateUserByUserId: (id: string, payload: UpdateUser)
  => Promise<User>;
}

export default UserUsecase;
