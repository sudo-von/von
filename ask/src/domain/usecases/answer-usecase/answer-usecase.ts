import {
  CreateAnswer,
  UpdateAnswer,
} from '../../entities/answer-entity/answer-entities';
import {
  Question,
} from '../../entities/question-entity/question-entities';
import IQuestionRepository from '../../repositories/question-repository/question-repository';

abstract class AnswerUsecase {
  constructor(protected readonly questionRepository: IQuestionRepository) {}

  abstract deleteAnswerByQuestionId: (id: string) => Promise<Question>;

  abstract createAnswerByQuestionId: (id: string, payload: CreateAnswer) => Promise<Question>;

  abstract updateAnswerByQuestionId: (id: string, payload: UpdateAnswer) => Promise<Question>;
}

export default AnswerUsecase;
