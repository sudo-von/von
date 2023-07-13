import {
  QuestionRepositoryFilters,
} from './question-repository-filters';
import {
  CreateDetailedAnswer,
  PartialDetailedAnswer,
} from '../../entities/answer-entity/answer-entities';
import {
  DetailedQuestion,
  CreateDetailedQuestion,
  PartialDetailedQuestion,
} from '../../entities/question-entity/question-entities';

interface IAnswerWriter {
  deleteDetailedAnswer: (filters?: QuestionRepositoryFilters)
  => Promise<DetailedQuestion | null>;

  createDetailedAnswer: (payload: CreateDetailedAnswer, filters?: QuestionRepositoryFilters)
  => Promise<DetailedQuestion>;

  updateDetailedAnswer: (payload: PartialDetailedAnswer, filters?: QuestionRepositoryFilters)
  => Promise<DetailedQuestion | null>;
}

interface IQuestionReader {
  getDetailedQuestion: (filters?: QuestionRepositoryFilters)
  => Promise<DetailedQuestion | null>;

  getDetailedQuestions: (filters?: QuestionRepositoryFilters)
  => Promise<DetailedQuestion[]>;
}

interface IQuestionWriter {
  createDetailedQuestion: (payload: CreateDetailedQuestion)
  => Promise<DetailedQuestion>;

  deleteDetailedQuestion: (filters?: QuestionRepositoryFilters)
  => Promise<DetailedQuestion | null>;

  updateDetailedQuestion: (payload: PartialDetailedQuestion, filters?: QuestionRepositoryFilters)
  => Promise<DetailedQuestion | null>;

  updateDetailedQuestions: (payload: PartialDetailedQuestion, filters?: QuestionRepositoryFilters)
  => Promise<void>;
}

interface IQuestion extends IAnswerWriter, IQuestionReader, IQuestionWriter {}

export default IQuestion;
