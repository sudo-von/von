import {
  QuestionRepositoryFilters,
} from './question-repository-filters';
import {
  Question,
  QuestionPayload,
} from '../../entities/question-entity/question-entities';
import { AnswerPayload } from '../../entities/answer-entity/answer-entities';

interface IQuestionRepositoryReader {
  getQuestions: (filters?: QuestionRepositoryFilters) => Promise<Question[]>;
  getQuestion: (filters?: QuestionRepositoryFilters) => Promise<Question | null>;
}

interface IQuestionRepositoryWriter {
  createQuestion: (
    payload: QuestionPayload
  ) => Promise<Question>;
  createAnswer: (
    payload: AnswerPayload,
    filters?: QuestionRepositoryFilters,
  ) => Promise<Question>;
  deleteQuestion: (
    filters?: QuestionRepositoryFilters
  ) => Promise<Question | null>;
  deleteAnswer: (
    filters?: QuestionRepositoryFilters
  ) => Promise<Question | null>;
  updateQuestion: (
    payload: QuestionPayload,
    filters?: QuestionRepositoryFilters
  ) => Promise<Question | null>;
  updateAnswer: (
    payload: AnswerPayload,
    filters?: QuestionRepositoryFilters,
  ) => Promise<Question | null>;
  updateQuestions: (
    payload: Partial<QuestionPayload>,
    filters?: QuestionRepositoryFilters
  ) => Promise<void>;
}

interface IQuestionRepository extends IQuestionRepositoryReader, IQuestionRepositoryWriter {}

export default IQuestionRepository;
