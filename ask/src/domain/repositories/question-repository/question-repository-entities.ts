import {
  Question,
} from '../../entities/question-entity/question-entities';
import {
  AnswerRepository,
} from '../answer-repository/answer-repository-entities';

export type QuestionRepository = Omit<Question, 'answer'> & {
  answer?: AnswerRepository;
};

export type CreateQuestionRepository = Omit<QuestionRepository, 'id' | 'answer'>;
