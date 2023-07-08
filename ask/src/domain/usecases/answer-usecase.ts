import {
  CreateAnswer,
  UpdateAnswer,
} from '../entities/answer/answer-entities';
import {
  Question,
} from '../entities/question/question-entities';
import IUserRepository from '../repositories/user/user-repository';
import IQuestionRepository from '../repositories/question/question-repository';

abstract class AnswerUsecase {
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly questionRepository: IQuestionRepository,
  ) {}

  abstract deleteAnswerByQuestionId: (id: string) => Promise<Question>;

  abstract createAnswerByQuestionId: (id: string, payload: CreateAnswer) => Promise<Question>;

  abstract updateAnswerByQuestionId: (id: string, payload: UpdateAnswer) => Promise<Question>;
}

export default AnswerUsecase;
