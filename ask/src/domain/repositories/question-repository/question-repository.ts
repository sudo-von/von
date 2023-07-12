import {
  QuestionRepositoryFilters,
} from './question-repository-filters';
import {
  QuestionRepository,
  CreateQuestionRepository,
} from './question-repository-entities';
import {
  CreateAnswerRepository,
  UpdateAnswerRepository,
} from '../answer-repository/answer-repository-entities';

interface IQuestionRepositoryReader {
  getQuestions: (filters?: QuestionRepositoryFilters) => Promise<QuestionRepository[]>;
  getQuestion: (filters?: QuestionRepositoryFilters) => Promise<QuestionRepository | null>;
}

interface IQuestionRepositoryWriter {
  createQuestion: (
    payload: CreateQuestionRepository
  ) => Promise<QuestionRepository>;

  createAnswer: (
    payload: CreateAnswerRepository,
    filters?: QuestionRepositoryFilters,
  ) => Promise<QuestionRepository>;

  deleteQuestion: (
    filters?: QuestionRepositoryFilters
  ) => Promise<QuestionRepository | null>;

  deleteAnswer: (
    filters?: QuestionRepositoryFilters
  ) => Promise<QuestionRepository | null>;

  updateQuestion: (
    payload: CreateQuestionRepository,
    filters?: QuestionRepositoryFilters
  ) => Promise<QuestionRepository | null>;

  updateAnswer: (
    payload: UpdateAnswerRepository,
    filters?: QuestionRepositoryFilters,
  ) => Promise<QuestionRepository | null>;

  updateQuestions: (
    payload: Partial<CreateQuestionRepository>,
    filters?: QuestionRepositoryFilters
  ) => Promise<void>;
}

interface IQuestionRepository extends IQuestionRepositoryReader, IQuestionRepositoryWriter {}

export default IQuestionRepository;
