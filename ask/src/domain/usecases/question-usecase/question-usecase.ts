import {
  CreateQuestion,
  DetailedQuestion,
} from '../../entities/question-entity/question-entities';
import IUserRepository from '../../repositories/user-repository/user-repository';
import IQuestionRepository from '../../repositories/question-repository/question-repository';

/**
 * Abstract class representing a question use case.
 * @abstract
 */
abstract class QuestionUsecase {
  /**
   * Creates an instance of QuestionUsecase.
   * @param {IUserRepository} userRepository - The user repository.
   * @param {IQuestionRepository} questionRepository - The question repository.
   */
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly questionRepository: IQuestionRepository,
  ) {}

  /**
   * Deletes a question by its ID.
   * @authentication Requires authentication to access this method.
   * @param {string} id - The ID of the question.
   */
  abstract deleteQuestionById: (id: string)
  => Promise<void>;

  /**
   * Retrieves questions by username.
   * @authentication Requires authentication to access this method.
   * @param {string} username - The username of the user.
   * @returns {Promise<DetailedQuestion[]>} A promise with an array of detailed questions.
   */
  abstract getQuestionsByUsername: (username: string)
  => Promise<DetailedQuestion[]>;

  /**
   * Creates a question for a user by its username.
   * @param {string} username - The username of the user.
   * @param {CreateQuestion} payload - The payload for creating the question.
   * @returns {Promise<DetailedQuestion>} A promise with the detailed question.
   */
  abstract createQuestionByUsername: (username: string, payload: CreateQuestion)
  => Promise<DetailedQuestion>;
}

export default QuestionUsecase;
