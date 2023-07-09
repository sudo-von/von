import {
  Question,
  CreateQuestion,
} from '../../entities/question/question-entities';
import IUserRepository from '../../repositories/user-repository/user-repository';
import IQuestionRepository from '../../repositories/question-repository/question-repository';

abstract class QuestionUsecase {
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly questionRepository: IQuestionRepository,
  ) {}

  abstract deleteQuestionById: (id: string) => Promise<Question>;

  abstract createQuestion: (payload: CreateQuestion) => Promise<Question>;

  abstract getQuestionsByUsername: (username: string) => Promise<Question[]>;
}

export default QuestionUsecase;
