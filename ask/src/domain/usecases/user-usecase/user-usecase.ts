import {
  CreateUser,
  UpdateUser,
  DetailedUser,
} from '../../entities/user-entity/user-entities';
import IUserRepository from '../../repositories/user-repository/user-repository';
import IQuestionRepository from '../../repositories/question-repository/question-repository';

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
  * Retrieves a user by user ID.
  * @param {string} id - The ID of the user.
  * @returns {Promise<DetailedUser>} A promise that resolves with the retrieved detailed user.
  */
  abstract getUserByUserId: (id: string)
  => Promise<DetailedUser>;

  /**
  * Creates a user with the provided payload.
  * @param {CreateUser} payload - The payload for creating the user.
  * @returns {Promise<DetailedUser>} A promise that resolves with the created detailed user.
  */
  abstract createUser: (payload: CreateUser)
  => Promise<DetailedUser>;

  /**
  * Updates a user by user ID with the provided payload.
  * @param {string} id - The ID of the user.
  * @param {UpdateUser} payload - The payload for updating the user.
  * @returns {Promise<DetailedUser>} A promise that resolves with the updated detailed user.
  */
  abstract updateUserByUserId: (id: string, payload: UpdateUser)
  => Promise<DetailedUser>;
}

export default UserUsecase;
