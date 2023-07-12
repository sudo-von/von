import {
  DetailedQuestion,
  CreateDetailedQuestion,
  UpdateDetailedQuestion,
} from '../../entities/question-entity/question-entities';
import {
  CreateDetailedAnswer,
  UpdateDetailedAnswer,
} from '../../entities/answer-entity/answer-entities';
import {
  QuestionRepositoryFilters,
} from './question-repository-filters';

interface IQuestionReader {
  getQuestion: (filters?: QuestionRepositoryFilters)
  => Promise<DetailedQuestion | null>;

  getQuestions: (filters?: QuestionRepositoryFilters)
  => Promise<DetailedQuestion[]>;
}

interface IQuestionWriter {
  createQuestion: (payload: CreateDetailedQuestion)
  => Promise<DetailedQuestion>;

  deleteAnswer: (filters?: QuestionRepositoryFilters)
  => Promise<DetailedQuestion | null>;

  deleteQuestion: (filters?: QuestionRepositoryFilters)
  => Promise<DetailedQuestion | null>;

  createAnswer: (payload: CreateDetailedAnswer, filters?: QuestionRepositoryFilters)
  => Promise<DetailedQuestion>;

  updateAnswer: (payload: UpdateDetailedAnswer, filters?: QuestionRepositoryFilters)
  => Promise<DetailedQuestion | null>;

  updateQuestion: (payload: UpdateDetailedQuestion, filters?: QuestionRepositoryFilters)
  => Promise<DetailedQuestion | null>;

  updateQuestions: (payload: Partial<UpdateDetailedQuestion>, filters?: QuestionRepositoryFilters)
  => Promise<void>;
}

interface IQuestion extends IQuestionReader, IQuestionWriter {}

export default IQuestion;
