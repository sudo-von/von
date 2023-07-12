import {
  CreateAnswer,
  UpdateAnswer,
} from '@entities/answer-entity/answer-entities';
import {
  DetailedQuestion,
} from '@entities/question-entity/question-entities';
import IQuestionRepository from '@repositories/question-repository/question-repository';

abstract class AnswerUsecase {
  constructor(protected readonly questionRepository: IQuestionRepository) {}

  abstract deleteAnswerByQuestionId: (id: string)
  => Promise<DetailedQuestion>;

  abstract createAnswerByQuestionId: (id: string, payload: CreateAnswer)
  => Promise<DetailedQuestion>;

  abstract updateAnswerByQuestionId: (id: string, payload: UpdateAnswer)
  => Promise<DetailedQuestion>;
}

export default AnswerUsecase;
