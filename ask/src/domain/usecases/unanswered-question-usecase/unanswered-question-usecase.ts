import {
  DetailedQuestion,
} from '../../entities/question-entity/question-entities';
import IUserRepository from '../../repositories/user-repository/user-repository';
import IQuestionRepository from '../../repositories/question-repository/question-repository';

/**
 * Abstract class representing an unanswered question use case.
 * @abstract
 */
abstract class UnansweredQuestionUsecase {
  /**
   * Creates an instance of UnansweredQuestionUsecase.
   * @param {IUserRepository} userRepository - The user repository.
   * @param {IQuestionRepository} questionRepository - The question repository.
   */
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly questionRepository: IQuestionRepository,
  ) {}

  /**
   * Retrieves unanswered questions by username.
   * @authentication Requires authentication to access this method.
   * @param {string} username - The username of the user.
   * @returns {Promise<DetailedQuestion[]>} A promise with an array of detailed questions.
   */
  abstract getUnansweredQuestionsByUsername: (username: string)
  => Promise<DetailedQuestion[]>;
}

export default UnansweredQuestionUsecase;
