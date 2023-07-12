import {
  CreateQuestion,
  DetailedQuestion,
} from '../../entities/question-entity/question-entities';
import IUserRepository from '../../repositories/user-repository/user-repository';
import IQuestionRepository from '../../repositories/question-repository/question-repository';

abstract class QuestionUsecase {
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly questionRepository: IQuestionRepository,
  ) {}

  abstract deleteQuestionById: (id: string)
  => Promise<DetailedQuestion>;

  abstract getQuestionsByUsername: (username: string)
  => Promise<DetailedQuestion[]>;

  abstract CreateBroadcastQuestion: (payload: CreateQuestion)
  => Promise<void>;

  abstract createQuestionByUsername: (username: string, payload: CreateQuestion)
  => Promise<DetailedQuestion>;
}

export default QuestionUsecase;
