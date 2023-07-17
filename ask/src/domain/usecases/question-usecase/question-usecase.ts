import {
  CreateQuestion,
  DetailedQuestion,
  CreateBroadcastQuestion,
} from '../../entities/question-entity/question-entities';
import IUserRepository from '../../repositories/user-repository/user-repository';
import IQuestionRepository from '../../repositories/question-repository/question-repository';

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
  * @param {string} id - The ID of the question.
  * @returns {Promise<DetailedQuestion>} A promise with the updated detailed question.
  */
  abstract deleteQuestionById: (id: string)
  => Promise<DetailedQuestion>;

  /**
  * Retrieves questions by username.
  * @param {string} username - The username of the user.
  * @returns {Promise<DetailedQuestion[]>} A promise with an array of retrieved detailed questions.
  */
  abstract getQuestionsByUsername: (username: string)
  => Promise<DetailedQuestion[]>;

  /**
  * Creates a broadcast question with the provided payload.
  * @param {CreateBroadcastQuestion} payload - The payload for creating the broadcast question.
  * @returns {Promise<void>} A promise when the broadcast question is created.
  */
  abstract createBroadcastQuestion: (payload: CreateBroadcastQuestion)
  => Promise<void>;

  /**
  * Creates a question for a user by username with the provided payload.
  * @param {string} username - The username of the user.
  * @param {CreateQuestion} payload - The payload for creating the question.
  * @returns {Promise<DetailedQuestion>} A promise with the created detailed question.
  */
  abstract createQuestionByUsername: (username: string, payload: CreateQuestion)
  => Promise<DetailedQuestion>;
}

export default QuestionUsecase;
