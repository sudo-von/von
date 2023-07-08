import {
  Question,
} from '../entities/question/question-entities';
import IUserRepository from '../repositories/user/user-repository';
import IQuestionRepository from '../repositories/question/question-repository';

abstract class UnansweredQuestionUsecase {
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly questionRepository: IQuestionRepository,
  ) {}

  abstract getUnansweredQuestionsByUsername: (username: string) => Promise<Question[]>;
}

export default UnansweredQuestionUsecase;
