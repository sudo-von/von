import {
  Question,
  CreateQuestion,
  CreateGlobalQuestion,
} from '../../entities/question-entity/question-entities';
import IUserRepository from '../../repositories/user-repository/user-repository';
import IQuestionRepository from '../../repositories/question-repository/question-repository';

abstract class QuestionUsecase {
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly questionRepository: IQuestionRepository,
  ) {}

  abstract deleteQuestionById: (id: string) => Promise<Question>;

  abstract getQuestionsByUsername: (username: string) => Promise<Question[]>;

  abstract createGlobalQuestion: (payload: CreateGlobalQuestion) => Promise<void>;

  abstract createQuestionByUsername: (payload: CreateQuestion) => Promise<Question>;
}

export default QuestionUsecase;
