import {
  DetailedQuestion,
} from '@entities/question-entity/question-entities';
import IUserRepository from '@repositories/user-repository/user-repository';
import IQuestionRepository from '@repositories/question-repository/question-repository';

abstract class AnsweredQuestionUsecase {
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly questionRepository: IQuestionRepository,
  ) {}

  abstract getAnsweredQuestionById: (id: string)
  => Promise<DetailedQuestion>;

  abstract getAnsweredQuestionsByUsername: (username: string)
  => Promise<DetailedQuestion[]>;
}

export default AnsweredQuestionUsecase;
