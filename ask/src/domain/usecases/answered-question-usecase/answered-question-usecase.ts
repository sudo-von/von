import {
  DetailedQuestion,
} from '../../entities/question-entity/question-entities';
import IUserRepository from '../../repositories/user-repository/user-repository';
import IQuestionRepository from '../../repositories/question-repository/question-repository';

/**
 * Abstract class representing an answered question use case.
 * @abstract
 */
abstract class AnsweredQuestionUsecase {
  /**
   * Creates an instance of AnsweredQuestionUsecase.
   * @param {IUserRepository} userRepository - The user repository.
   * @param {IQuestionRepository} questionRepository - The question repository.
   */
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly questionRepository: IQuestionRepository,
  ) {}

  /**
   * Retrieves an answered question by question ID.
   * @param {string} id - The ID of the question.
   * @returns {Promise<DetailedQuestion>} A promise with the detailed question.
   */
  abstract getAnsweredQuestionById: (id: string)
  => Promise<DetailedQuestion>;

  /**
   * Retrieves answered questions by username.
   * @param {string} username - The username of the user.
   * @returns {Promise<DetailedQuestion[]>} A promise with an array of detailed questions.
   */
  abstract getAnsweredQuestionsByUsername: (username: string)
  => Promise<DetailedQuestion[]>;
}

export default AnsweredQuestionUsecase;
