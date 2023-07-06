import {
  CreateQuestion, Question,
} from '../entities/question/question-entities';
import IUserRepository from '../repositories/user-repository';
import IQuestionRepository from '../repositories/question-repository';

abstract class QuestionUsecase {
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly questionRepository: IQuestionRepository,
  ) {}

  abstract getAnsweredQuestionById: (id: string) => Promise<Question>;

  abstract createQuestion: (payload: CreateQuestion) => Promise<Question>;

  abstract getQuestionsByUsername: (
    requestingUser: string,
    requestedUser: string,
  ) => Promise<Question[]>;

  abstract getAnsweredQuestionsByUsername: (
    username: string
  ) => Promise<Question[]>;

  abstract getUnansweredQuestionsByUsername: (
    requestingUser: string,
    requestedUser: string
  ) => Promise<Question[]>;
}

export default QuestionUsecase;
