import {
  Question,
  CreateQuestion,
} from '../../entities/question-entity/question-entities';
import IUserRepository from '../../repositories/user-repository/user-repository';
import IQuestionRepository from '../../repositories/question-repository/question-repository';

abstract class QuestionUsecase {
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly questionRepository: IQuestionRepository,
  ) {}

  abstract deleteQuestionById: (id: string) => Promise<Question>;

  abstract createGlobalQuestion: (payload: CreateQuestion) => Promise<void>;

  abstract getQuestionsByUsername: (username: string) => Promise<Question[]>;

  abstract createQuestionByUsername: (
    username: string,
    payload: CreateQuestion
  ) => Promise<Question>;
}

export default QuestionUsecase;
