import {
  CreateUser,
  UpdateUser,
  DetailedUser,
} from '../../entities/user-entity/user-entities';
import IUserRepository from '../../repositories/user-repository/user-repository';
import IQuestionRepository from '../../repositories/question-repository/question-repository';

/**
 * Abstract class representing a user use case.
 * @abstract
 */
abstract class UserUsecase {
  /**
   * Creates an instance of UserUsecase.
   * @param {IUserRepository} userRepository - The user repository.
   * @param {IQuestionRepository} questionRepository - The question repository.
   */
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly questionRepository: IQuestionRepository,
  ) {}

  /**
   * Creates a user with the provided payload.
   * @broker Can only be consumed through a broker.
   * @param {CreateUser} payload - The payload for creating the user.
   * @returns {Promise<DetailedUser>} A promise with the detailed user.
   */
  abstract createUser: (payload: CreateUser)
  => Promise<DetailedUser>;

  /**
   * Retrieves a user by its username.
   * @param {string} username - The username of the user.
   * @returns {Promise<DetailedUser>} A promise with the detailed user.
   */
  abstract getUserByUsername: (username: string)
  => Promise<DetailedUser>;

  /**
   * Updates a user by user ID.
   * @broker Can only be consumed through a broker.
   * @param {string} userId - The user ID of the user to update.
   * @param {UpdateUser} payload - The payload for updating the user.
   * @returns {Promise<DetailedUser>} A promise with the detailed user.
   */
  abstract updateUserByUserId: (userId: string, payload: UpdateUser)
  => Promise<DetailedUser>;
}

export default UserUsecase;
