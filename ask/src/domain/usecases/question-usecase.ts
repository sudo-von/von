import {
  CreateQuestion, Question,
} from '../entities/question/question-entities';
import IUserRepository from '../repositories/user-repository';
import IQuestionRepository from '../repositories/question-repository';
import { UpdateAnswer } from '../entities/answer/answer-entities';

abstract class QuestionUsecase {
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly questionRepository: IQuestionRepository,
  ) {}

  abstract getAnsweredQuestionById: (id: string) => Promise<Question>;

  abstract createQuestion: (payload: CreateQuestion) => Promise<Question>;

  abstract getQuestionsByUsername: (username: string) => Promise<Question[]>;

  abstract getAnsweredQuestionsByUsername: (username: string) => Promise<Question[]>;

  abstract getUnansweredQuestionsByUsername: (username: string) => Promise<Question[]>;

  abstract updateAnswerByQuestionId: (id: string, payload: UpdateAnswer) => Promise<Question>;
}

export default QuestionUsecase;
