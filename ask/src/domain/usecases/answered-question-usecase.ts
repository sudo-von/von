import {
  Question,
} from '../entities/question/question-entities';
import IUserRepository from '../repositories/user/user-repository';
import IQuestionRepository from '../repositories/question/question-repository';

abstract class AnsweredQuestionUsecase {
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly questionRepository: IQuestionRepository,
  ) {}

  abstract getAnsweredQuestionById: (id: string) => Promise<Question>;

  abstract getAnsweredQuestionsByUsername: (username: string) => Promise<Question[]>;
}

export default AnsweredQuestionUsecase;
