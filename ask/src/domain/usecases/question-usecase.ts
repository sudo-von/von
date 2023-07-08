import {
  CreateAnswer,
  UpdateAnswer,
} from '../entities/answer/answer-entities';
import {
  CreateQuestion, Question,
} from '../entities/question/question-entities';
import IUserRepository from '../repositories/user/user-repository';
import IQuestionRepository from '../repositories/question/question-repository';

abstract class QuestionUsecase {
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly questionRepository: IQuestionRepository,
  ) {}

  abstract deleteQuestionById: (id: string) => Promise<Question>;

  abstract getAnsweredQuestionById: (id: string) => Promise<Question>;

  abstract deleteAnswerByQuestionId: (id: string) => Promise<Question>;

  abstract createQuestion: (payload: CreateQuestion) => Promise<Question>;

  abstract getQuestionsByUsername: (username: string) => Promise<Question[]>;

  abstract getAnsweredQuestionsByUsername: (username: string) => Promise<Question[]>;

  abstract getUnansweredQuestionsByUsername: (username: string) => Promise<Question[]>;

  abstract createAnswerByQuestionId: (id: string, payload: CreateAnswer) => Promise<Question>;

  abstract updateAnswerByQuestionId: (id: string, payload: UpdateAnswer) => Promise<Question>;
}

export default QuestionUsecase;
