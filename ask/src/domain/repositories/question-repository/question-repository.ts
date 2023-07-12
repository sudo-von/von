import {
  DetailedQuestion,
  CreateQuestion,
  UpdateBasicQuestion,
} from '@entities/question-entity/question-entities';
import {
  CreateAnswer,
  UpdateAnswer,
} from '@entities/answer-entity/answer-entities';
import {
  QuestionRepositoryFilters,
} from './question-repository-filters';

interface IQuestionReader {
  getQuestions: (filters?: QuestionRepositoryFilters) => Promise<DetailedQuestion[]>;
  getQuestion: (filters?: QuestionRepositoryFilters) => Promise<DetailedQuestion | null>;
}

interface IQuestionWriter {
  createQuestion: (
    payload: CreateQuestion
  ) => Promise<DetailedQuestion>;

  createAnswer: (
    payload: CreateAnswer,
    filters?: QuestionRepositoryFilters,
  ) => Promise<DetailedQuestion>;

  deleteQuestion: (
    filters?: QuestionRepositoryFilters
  ) => Promise<DetailedQuestion | null>;

  deleteAnswer: (
    filters?: QuestionRepositoryFilters
  ) => Promise<DetailedQuestion | null>;

  updateQuestion: (
    payload: UpdateBasicQuestion,
    filters?: QuestionRepositoryFilters
  ) => Promise<DetailedQuestion | null>;

  updateAnswer: (
    payload: UpdateAnswer,
    filters?: QuestionRepositoryFilters,
  ) => Promise<DetailedQuestion | null>;

  updateQuestions: (
    payload: Partial<UpdateBasicQuestion>,
    filters?: QuestionRepositoryFilters
  ) => Promise<void>;
}

interface IQuestion extends IQuestionReader, IQuestionWriter {}

export default IQuestion;
