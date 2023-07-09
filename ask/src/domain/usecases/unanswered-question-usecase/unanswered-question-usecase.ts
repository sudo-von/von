import {
  Question,
} from '../../entities/question-entity/question-entities';
import IUserRepository from '../../repositories/user-repository/user-repository';
import IQuestionRepository from '../../repositories/question-repository/question-repository';

abstract class UnansweredQuestionUsecase {
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly questionRepository: IQuestionRepository,
  ) {}

  abstract getUnansweredQuestionsByUsername: (username: string) => Promise<Question[]>;
}

export default UnansweredQuestionUsecase;
